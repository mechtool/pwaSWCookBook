// Скрипт регистрирует сервисного рабочего, чей контекст клиентов ограничен папкой `controlled.
//Все серверные запросы этих клиентов теперь будут проходить через сервисного рабочего
navigator.serviceWorker.register('./controlled/service-worker.js').catch((err)=>{
	console.log(err);
});

function onLoadIframe(event) {
	let target = event.target;
	setTimeout(function(){
		target.style.height = '200px';
	}, 300);
}




