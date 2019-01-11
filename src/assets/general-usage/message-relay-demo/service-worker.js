// Установка обработчика события получения сообщения от
//всех клиентов, которые этот сервисный рабочий обслуживает
self.addEventListener('message', function(event) {
	//Получаем всех клиентов
	var promise = self.clients.matchAll()
	.then(function(clientList) {
		//выделяем идентификатор клиента - отправителя
		var senderID = event.source.id;
		//обход всех клиентов, для отправки сообщения
		//об активности текущего клиента
		clientList.forEach(function(client) {
			//пропускаем текущий клиент-отправитель
			if (client.id === senderID) {
				return;
			}
			//каждому клиенту в цикле отправляем сообщение
			client.postMessage({
				client: senderID,
				message: event.data
			});
		});
	});
	//Если интерфейс ожидания выполнения поддерживается,
	//ожидаем выполнения промиса отправки сообщений
	if (event.waitUntil) {
		event.waitUntil(promise);
	}
});
//При активации сервисного рабочего, требуем его немедленного взятия управления
//над клиентами. Это не нужно для отправки сообщения, а лишь для демонстрации возможности
//необязательности явного обновления страницы(события навигации) после активации сервисного
// рабочего.
self.addEventListener('activate', function(event) {
	event.waitUntil(self.clients.claim());
});