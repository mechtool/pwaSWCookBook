// Скрипт регистрирует сервисного рабочего, чей контекст клиентов ограничен папкой `controlled.
//Все серверные запросы этих клиентов теперь будут проходить через сервисного рабочего
navigator.serviceWorker.register('./controlled/service-worker.js').catch((err)=>{
	console.log(err);
});

function onLoadIframe(event) {
	event.target.style.height = event.target.contentWindow.document.documentElement.getClientRects()[0].height + 'px';
	
}


