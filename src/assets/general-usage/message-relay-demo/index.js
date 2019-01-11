(function() {
	// Проверка поддержки сервисного рабочего
	if (navigator.serviceWorker) {
		// Получаем элементы пользовательского интерфейса,
		//для последующего отображения информации пользователю
		var message = document.getElementById('message');
		var received = document.getElementById('received');
		var status = document.getElementById('status');
		var inbox = {};
		//Инициализация переменной статуса поддержки.
		status.textContent = 'Поддерживается';
		//Регистрация сервисного рабочего
		navigator.serviceWorker.register('service-worker.js').then((registration)=>{
			console.log(registration.scope) ;
		});
		//Установка обработчика получения сообщений от сервисного рабочего
		navigator.serviceWorker.addEventListener('message', function(event) {
			//При получении сообщения, отображаем его как активного клиента
			var clientId = event.data.client, node, notActive = received.querySelector('.notActive') ;
			//Удаляем предупреждение об отсутствующих неактивных клиентах
			notActive && received.removeChild(notActive);
			//Сообщение от клиента получено в первый раз, поэтому
			//нужно определить ему место в интерфейсе и запомнить во вспомогательном
			//объекте inbox
			if (!inbox[clientId]) {
				node = document.createElement('div');
				received.appendChild(node);
				inbox[clientId] = node;
			}
			//Отобразить сообщение, указав его идентификатор
			node = inbox[clientId];
			node.textContent = 'Клиент с идентификатором ' + clientId + ' сообщает: ' + event.data.message;
			window.frameElement && 	(window.frameElement.style.height = window.document.body.clientHeight + 'px') ;
		});
		//Обработчик события ввода символов в поле ввода
		message.addEventListener('input', function() {
			//Если эту страницу не поддерживает сервисный рабочий,
			//то и нет отправителя
			if (!navigator.serviceWorker.controller) {
				//сообщаем об отсутствии отправителя
				status.textContent = 'ошибка : нет контроллера';
				return;
			}
			// Отправитель существует, передаем сообщение через него
			navigator.serviceWorker.controller.postMessage(message.value);
		});
	}
})();