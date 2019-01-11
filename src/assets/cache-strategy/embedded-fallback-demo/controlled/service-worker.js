//имя кэша
let CACHE = 'embedded-fallback';
// При событии установки сервисного рабочего запустить предварительное кэширование ресурсов.
self.addEventListener('install', function(evt) {
	console.log('Сервисный рабочий установлен.');
	// Отложенная активация сервисного рабочего до момента окончания предварительного кэширования ресурсов
	evt.waitUntil(precache().then(function(){
		//Принудительно активируем сервисного рабочего для немедленного
		//контроля над клиентами без ожидания их перезагрузки
		return self.skipWaiting();
	}));
});
//При событии активации сервисного рабочего
self.addEventListener('activate', function (evt) {
	// `self.clients.claim()` - позволяет сервисному рабочему начать
	// перехват запросов немедленно. Дополнительно методу `self.skipWaiting()` необходимо
	// обслужить резервный код при старте приложения.
	evt.waitUntil(self.clients.claim());
});

// При событии запроса картинки с контролируемой странице
self.addEventListener('fetch', function(evt) {
	console.log('Сервисный рабочий работает с клиентом.');
	evt.respondWith(networkOrFallback(evt.request));
});

// Это упрощенная версия обращения в сеть, затем
// перехода в кэш без ожидания ответа для илюстрации обработки ошибки запроса
function networkOrFallback(request) {
	return fetch(request).then(function (response) {
		return response.url.indexOf('missing') < 0  ? response : useFallback();
	})
}

// Функция предварительного кэширования ресурсов - открывает (создает) кэш по имени и добавляет в него ресурсы находящиеся в папке 'controlled', перечисленные списком. Возвращает разрешенный промис, если вся загрузка прошла успешно, что является индикатором для активации сервисного рабочего.
function precache() {
	return caches.open(CACHE).then(function (cache) {
		return cache.addAll([
			'/assets/cache-strategy/embedded-fallback-demo/controlled/embedded-fallback-demo-controlled.html',
		]);
	});
}
// Этот резервный ресурс - встроенный в код SVG
var FALLBACK =
		'<svg xmlns="http://www.w3.org/2000/svg" width="200" height="180" stroke-linejoin="round">' +
		'  <path stroke="#DDD" stroke-width="25" d="M99,18 15,162H183z"/>' +
		'  <path stroke-width="17" fill="#FFF" d="M99,18 15,162H183z" stroke="#eee"/>' +
		'  <path d="M91,70a9,9 0 0,1 18,0l-5,50a4,4 0 0,1-8,0z" fill="#aaa"/>' +
		'  <circle cy="138" r="9" cx="100" fill="#aaa"/>' +
		'</svg>';

// Этот метод возвращает встроенный в код ресурс.
function useFallback() {
	return Promise.resolve(new Response(FALLBACK, { headers: {
			'Content-Type': 'image/svg+xml'
		}}));
}

