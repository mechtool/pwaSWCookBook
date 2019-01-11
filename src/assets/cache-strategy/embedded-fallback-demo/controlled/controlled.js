//Когда загружается этот файл, то следует быстрая проверка
//определяющая то, находится ли данный файл под контролем
//активного сервисного рабочего
if (navigator.serviceWorker.controller) {
	loadImage();
//если нет, то ждем изменения статуса на активный и
	//запускаем тот же метод
} else {
	navigator.serviceWorker.oncontrollerchange = function() {
		this.controller.onstatechange = function() {
			if (this.state === 'activated') {
				loadImage();
			}
		};
	};
}

function loadImage() {
	//ставим адрес для ресурсного файла, что
	//приведет к попытки загрузки его с сервера
	document.querySelector('img').src = './missing';
}