//имя кэша
let CACHE = 'cache-update-refresh';
// При событии установки сервисного рабочего запустить предварительное кэширование ресурсов.
self.addEventListener('install', function(evt) {
	console.log('Сервисный рабочий установлен.');
	// Отложенная активация сервисного рабочего до момента окончания предварительного кэширования ресурсов
	evt.waitUntil(precache());
});

// При событии запроса картинки с контролируемой странице
self.addEventListener('fetch', function(evt) {
	console.log('Сервисный рабочий работает с клиентом.');
	//Сразу берем копию из кэша.
	evt.respondWith(fromCache(evt.request));
	//Затем запускаем функцию запроса ресурса и обновления кэша
	//и запускаем функцию обновления
	evt.waitUntil(update(evt.request).then(refresh));
});

// Функция предварительного кэширования ресурсов - открывает (создает) кэш по имени и добавляет в него ресурсы находящиеся в папке 'controlled', перечисленные списком. Возвращает разрешенный промис, если вся загрузка прошла успешно, что является индикатором для активации сервисного рабочего.
function precache() {
	return caches.open(CACHE).then(function (cache) {
		return cache.addAll([
			'/assets/cache-strategy/cache-update-refresh-demo/controlled/cache-update-refresh-demo-controlled.html',
			'/cacheStrategy',  //кэширование первой картинки
		]);
	});
}
// Открывает кэш, где хранится ресурс, производится его поиск. В случае его отсутствия, управление все равно передается в первую функцию с результатом `undefined`, результат которого возвращается через новый отвергнутый промис сос строкой..
function fromCache(request) {
	return caches.open(CACHE).then(function (cache) {
		return cache.match(request) ;
	});
}
//Фунция удаленного запроса и обновление кэша её результатом
function update(request) { //возвращаемый промис служит индикатором
	// завершения метода вызова .waitUntil()
	return caches.open(CACHE).then(function (cache) {
		return fetch(request).then(function (response) {
			return cache.put(request, response.clone()).then(function () {
				return response;
			});
		});
	});
}

function refresh(response) {
	return self.clients.matchAll().then(function (clients) {
		clients.forEach(function (client) {
			let message = {type: 'refresh', url: response.url, eTag: response.headers.get('ETag')};
			client.postMessage(JSON.stringify(message));
		});
	});
}