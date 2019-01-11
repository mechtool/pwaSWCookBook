//имя кэша
let CACHE = 'network-or-cache';
// При событии установки сервисного рабочего запустить предварительное кэширование ресурсов.
self.addEventListener('install', function(evt) {
	console.log('Сервисный рабочий установлен.');
	// Отложенная активация сервисного рабочего до момента окончания предварительного кэширования ресурсов
	evt.waitUntil(precache());
});

// При событии запроса картинки с контролируемой странице
self.addEventListener('fetch', function(evt) {
	console.log('Сервисный рабочий работает с клиентом.');
	//Сначала следует попытка получение ресурса с сервера при неудаче, берем копию из кэша.
	evt.respondWith(fromNetwork(evt.request, 400).catch(function () {
		console.log('Берем ресурс из кэша.');
		return fromCache(evt.request);
	}));
});

// Функция предварительного кэширования ресурсов - открывает (создает) кэш по имени и добавляет в него ресурсы находящиеся в папке 'controlled', перечисленные списком. Возвращает разрешенный промис, если вся загрузка прошла успешно, что является индикатором для активации сервисного рабочего.
function precache() {
	return caches.open(CACHE).then(function (cache) {
		return cache.addAll([
			'/assets/cache-strategy/network-cache-demo/controlled/network-cache-demo-controlled.html',
			'/cacheStrategy',  //кэширование первой картинки
		]);
	});
}

// Функция ограниченного по времени запроса к серверу. Если запрос длиться более заявленного ограничения, или оказался неудачным, получение ресурса происходит из кэша.
function fromNetwork(request, timeout) {
	return new Promise(function (fulfill, reject) {
		// Промис отвергается, если истек timeout.
		let timeoutId = setTimeout(reject, timeout);
		// Ответ получен раньше истечения диапазона, timeout отчищается, промис разрешается ресурсом, полученным с сервера.
		fetch(request).then(function (response) {
			clearTimeout(timeoutId);
			console.log('Берем ресурс с сервера.');
			fulfill(response);
			// Промис отвергается, при ошибке на сервере, и запрос переправляется в кэш.
		}, reject);
	});
}

// Открывает кэш, где хранится ресурс, производится его поиск. В случае его отсутствия, управление все равно передается в первую функцию с результатом `undefined`, результат которого возвращается через новый отвергнутый промис сос строкой..
function fromCache(request) {
	return caches.open(CACHE).then(function (cache) {
		return cache.match(request).then(function (matching) {
			return matching || Promise.reject('no-match');
		});
	});
}
