var version;
//Обработчик события установки сервисного рабочего, происходит при
//старте приложения, если файл сервисного рабочего устанавливается впервые или
//его файл был изменен (т.е. изменилось количество байт файла)
self.addEventListener('install', function(event) {
	console.log('[ServiceWorker] Версия сервисного рабочего :', version);
	//ожидание окончания завершения операций
	event.waitUntil(
		//запрос произвольной картинки
		fetch('/immediateClaim/image').then(function(response) {
			//её успешное получение и установка версии
			// укладка её в кэш приложения
			version =  Date.now()+'';
			return caches.open(version).then(function(cache) {
				console.log('[ServiceWorker] Новая картинка кэширована, версия :', version);
				//Очень важно в этом месте вернуть промис для продолженной обработки
				// и последующего запуска метода пропуска ожидания skipWaiting() после
				//обновления кэша картинки. Помещаем картинку в кэш под определенным именем.
				return cache.put('/random.jpg', response);
			}) ;
		}).then(function() {//продолжение обработки
			// skipWaiting() - пропускает стадию ожидания навигационного события (перезагрузки страницы или
			// её закрытия) для активации контроля нового сервисного рабочего над клиентской страницей,
			// запуская это событие (activate) автоматически. Вместе с методом Clients.claim() это позволяет
			// получить немедленный контроль над клиентом (клиентами)
			console.log('[ServiceWorker] Пропуск ожидания события навигации');
			return self.skipWaiting();
		})
	);
});
//Обработчик события активации сервисного рабочего, вызывается после успешной
//его установки в браузер и запущенного любого навигационного события.
//Поскольку выше был вызов метода пропуска события навигации skipWaiting(),
//это событие запускается немедленно.
self.addEventListener('activate', function(event) {
	// Просто, метод отладки для перечисления
	// всех контроллируемых клиентов.
	self.clients.matchAll({
		includeUncontrolled: true
	}).then(function(clientList) {
		var urls = clientList.map(function(client) {
			return client.url;
		});
		console.log('[ServiceWorker] Контроллируемые клиенты:', urls.join(', '));
	});
	//Приостановка выполнения скрипта до исполнения кода ниже
	event.waitUntil(
		//Удаление старого кэша, который не соответствует новой версии
		//сервисного рабочего
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (cacheName !== version) {
						console.log('[ServiceWorker] Удаление старого кэша:', cacheName);
						return caches.delete(cacheName);
					}
				})
			);
		}).then(function(){
			// claim() - этот метод позволяет активному сервисному рабочему установить себя
			// в качестве контроллера (controller) для всех своих клиентов в области ответственности
			// этого сервисного рабочего, вызывая при этом событие oncontrollerchange для всех своих клиентов.
			console.log('[ServiceWorker] Запуск требований клиентов версии ', version);
			return self.clients.claim();
		})
	);
});
//Обработчик события запроса любых ресурсов со страниц-клиентов
//сервисного рабочего
self.addEventListener('fetch', function(event) {
	//перехват запроса на получение новой картинки
	if (event.request.url.includes('/random')) {
		console.log('[ServiceWorker] Запрос картинки для адреса', event.request.url);
		event.respondWith(
			caches.open(version).then(function(cache) {
				//Достаем картинку из кэша, предварительно положенную при
				//установке сервисного рабочего
				return cache.match('/random.jpg').then(function(response) {
					//Выкидываем ошибку, если в кэше ничего нет
					if (!response) {
						console.error('[ServiceWorker] Кэш отсутствует');
					}
					//Возвращаем картинку, находящуюся в кэше
					return response;
				});
			})
		);
	}   //перехват запроса на получения новой версии сервисного рабочего
	if (event.request.url.includes('/version')) {
		//ответ цифрами новой версии с установкой типа ресурса
			event.respondWith(new Response(version, {
				headers: {
					'content-type': 'text/plain'
				}
		}));
	}
});