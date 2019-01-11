//имя кэша
let CACHE = 'cache-only';
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
});

// Функция предварительного кэширования ресурсов - открывает (создает) кэш по имени и добавляет в него ресурсы находящиеся в папке 'controlled', перечисленные списком. Возвращает разрешенный промис, если вся загрузка прошла успешно, что является индикатором для активации сервисного рабочего.
function precache() {
	return caches.open(CACHE).then(function (cache) {
		return cache.addAll([
			'/assets/cache-strategy/cache-only-demo/controlled/cache-only-demo-controlled.html',
			'/cacheStrategy',  //кэширование первой картинки
		]);
	});
}
// Открывает кэш, где хранится ресурс, производится его поиск. В случае его отсутствия, управление все равно передается в первую функцию с результатом `undefined`, результат которого возвращается через новый отвергнутый промис сос строкой..
function fromCache(request) {
	return caches.open(CACHE).then(function (cache) {
		return cache.match(request).then(function (matching) {
			return matching || Promise.reject('не ресурса в кэше');
		});
	});
}
