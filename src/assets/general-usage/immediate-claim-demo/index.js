// Функция симуляции простого интерфейса обновления картинки,
// которая передает на отображение в пользовательский интерфейс
//номер версии сервисного рабочего
function fetchUpdate() {
	//поиск элемента изображения
	var img = document.querySelector('#random');
	//установка нового адреса картинки, что вызывает запрос на сервер
	img.src = '/random'+ Date.now();
	//запрос версии сервисного рабочего
	fetch('/version').then(function(response) {
		//возврат цифр версии
		return response.text();
	}).then(function(text) {
		//логирование новой версии в интерфейс пользователя
		debug(text, 'version');
	});
}

// Если страница имеет активного сервисного рабочего,
// запустить обновление картинки и логировать событие загрузки
function startServiceWorker(manually) {
	if (!manually && navigator.serviceWorker.controller) {
		var url = navigator.serviceWorker.controller.scriptURL;
		console.log('serviceWorker.controller', url);
		debug(url, 'onload');
		fetchUpdate();
	} else {
		// Регистрация сервисного рабочего, количество байт его файла изменилось,
		//или это первая регистрация
		navigator.serviceWorker.register('./service-worker.js').then(function(registration) { //логирование событий загрузки и  регистрации
			debug('Произошла загрузка сервисного рабочего', 'onload');
			debug(registration.scope, 'register');
		});
	}
};

//Событие, возникающее при изменении экземпляра активного сервисного рабочего,
// контролирующего клиента
navigator.serviceWorker.addEventListener('controllerchange', function() {
	var scriptURL = navigator.serviceWorker.controller.scriptURL;
	console.log('активация события oncontrollerchange', scriptURL);
	//запуск логирования этого события в интерфейс пользователя
	debug(scriptURL, 'oncontrollerchange');
	//обновление картинки и логирование версии сервисного рабочего
	fetchUpdate();
});
//Ищем элемент кнопки ставим на него обработчик события нажатия
document.querySelector('#update').addEventListener('click', function() {
	//ждем (проверяем) активность сервисного рабочего
	navigator.serviceWorker.ready.then(function (registration) {
		//запрос на снятие с регистрации файла сервисного рабочего
		// т.е. провоцируем событие установки новой версии
	registration.unregister().then(()=>{
		console.log('Снятие с регистрации сервисного рабочего успешно!');
		startServiceWorker(true) ;
	}).catch(()=>{
		console.log('Снятие с регистрауции не удалось!');
	})
	});
});
//Функция логирования работы приложения, ищет нужный элемент
//отображения логов и меняет их значение
function debug(message, element) {
	var target = document.querySelector('#' + (element || 'log'));
	target.textContent = message;
}
//Запуск регистрации сервисного рабочего
startServiceWorker();