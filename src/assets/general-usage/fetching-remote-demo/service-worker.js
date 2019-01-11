// Создаем прокси для всех запросов на локальные
// адреса содержащие подстроку `cookbook-proxy`.
self.onfetch = function(event) {
	//Проверка вхождения подстроки
	if (event.request.url.includes('cookbook-proxy')) {
		//Формирование объекта свойств запроса
		var init = { method: 'GET',
			mode: event.request.mode,
			cache: 'default' };
		//Выделение действительного адреса строки запроса
		var url = event.request.url.split('cookbook-proxy/')[1];
		//логирование действий
		console.log('DEBUG: проксирование', url);
		//Формирование запроса и ответ результатом
		event.respondWith(fetch(url, init));
	} else {
		//Формирование запроса на основе не измененного адреса
		event.respondWith(fetch(event.request));
	}
};