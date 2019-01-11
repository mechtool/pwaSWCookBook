//Инициализация переменной кэша
let CACHE = 'cache-update-refresh';
//проверка поддержки сервисного рабочего
if ('serviceWorker' in navigator) {
	//подписка на событие получения сообщения от сервисного рабочего
	navigator.serviceWorker.onmessage = function (evt) {
		let message = JSON.parse(evt.data),  //переложили данные в переменную
			isRefresh = message.type === 'refresh',//проверили тип данных
			isAsset = message.url.includes('cacheStrategy'),//является ли запрос ресурсным
			lastETag = localStorage.currentETag,//переложили ETag в переменную из локального хранилища
		// [ETag](https://en.wikipedia.org/wiki/HTTP_ETag) заголовок, обычно содержащий
		// объект ресурсов, поэтому очень эффективный способ проверки свежести контента.
			isNew =  lastETag !== message.eTag;
		if (isRefresh && isAsset && isNew) { //проверяем все условия
			//пропускаем вызов, когда нет ETag
			if (lastETag) {
				//Отображаем оповещение пользователю
				notice.classList.add('active');
			}
			// Обновили ETag в хранилище
			localStorage.currentETag = message.eTag;
		}
	};
	//Находим интерфейс оповещения об обновлении
	var notice = document.querySelector('#update-notice');
	//нахожим кнопку активности и
	var update = document.querySelector('#update');
	//ставим на нее обработчик нажатия
	update.onclick = function (evt) {
		//находим элемент картинки
		var img = document.querySelector('img');
		// предотвращаем действия по умолчанию.
		evt.preventDefault();
		// Открываем соответствующий кэш,
		caches.open(CACHE)
		.then(function (cache) { //открываем кэш и
			//получаем обновленный объект ответа
			return cache.match(img.src);
		})
		.then(function (response) {
			// Выделяем из него объект потока.
			return response.blob();
		})
		// .
		.then(function (bodyBlob) {
			//создаем DomString и обновляем им данные с сервера
			img.src = URL.createObjectURL(bodyBlob);
			//Прячем оповещение пользователя
			notice.classList.remove('active');
		});
	};
}