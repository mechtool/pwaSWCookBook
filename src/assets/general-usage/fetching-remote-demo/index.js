// По этим адресам будут загружены ресурсы несколько раз
// * `https` SSL protocol without allow origin header
// * `http` non-cryptographic protocol
var urls = {
	'https-acao': 'https://mozorg.cdn.mozilla.net/media/img/styleguide/identity/mozilla/wordmark.b9f1818e8d92.png',
	'https': 'https://static.squarespace.com/static/52d66949e4b0a8cec3bcdd46/t/52ebf67fe4b0f4af2a4502d8/1391195777839/1500w/Hello%20Internet.003.png',
	'http': 'http://piotr.zalewa.info/downloads/mozilla.png'
};

// Существуют два режима получения удаленных ресурсов
// с установленным режимом ('cors') и без него ('no-cors')
// (https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).
// Этот пример использует два подхода.
var fetchModes = ['cors', 'no-cors'];

// Проверка на существование зарегистрированного сервисного рабочего для
// текущего хоста. Если его нет - его регистрируем и перегружаем страницу
// для немедленного получения контроля сервисным рабочим над страницей.
navigator.serviceWorker.getRegistration().then(function(registration) {
	//Сама проверка
	if (!registration || !navigator.serviceWorker.controller) {
		//Регистрация сервисного рабочего
		navigator.serviceWorker.register('./service-worker.js').then(function() {
			//логирование действий
			console.log('Сервичный рабочий зарегистрирован, страница перезагружается!');
			//принудительная перезагрузка страницы
			window.location.reload();
		});
	} else {
		//логирование существование сервисного рабочего
		console.log('DEBUG: Клиент находиться под контролем сервисного рабочего');
		proceed();
	}
});

//Подготовка запросов к запуску, формируя их из массива адресов
// и массива (fetchModes) режимов cors. Вызов метода создания элементов изображений.
function proceed() {
	//цикл по массиву адресов
	for (var protocol in urls) {
		//проверка свойства на принадлежность
		if (urls.hasOwnProperty(protocol)) {
			//Вызов метода создания изображения
			makeImage(protocol, urls[protocol]);
			//Цикл по массиву режимов cors
			for (var index = 0; index < fetchModes.length; index++) {
				//получение режима
				var fetchMode = fetchModes[index];
				//формирование объекта настройки
				var init = { method: 'GET',
					mode: fetchMode,
					cache: 'default' };
				//Вызов функции отправки запроса ресурса
				makeRequest(fetchMode, protocol, init)();
			}
		}
	}
}

// Функция создания элемента изображения,
// согласно переданному адресу, заставляя браузер выполнить запрос
// без перехвата сервисным рабочим, поскольку в нем устагновлен фильтр
function makeImage(protocol, url) {
	var section = 'img-' + protocol;
	var image = document.createElement('img');
	image.src = url;
	document.getElementById(section).appendChild(image);
}

// Функция создания запроса
function makeRequest(fetchMode, protocol, init) {
	return function() {
		var section = protocol + '-' + fetchMode;
		var url = urls[protocol];
		// Выполнение запроса удаленного ресурса непосредственно,
		// минуя сервисного рабочего.
		fetch(url, init).then(function(response) {
			//Подготовка логирование удачного выполнения
			fetchSuccess(response, url, section);
		}).catch(function(error) {
			//Подготовка логирования не удачного выполнения
			fetchCatch(error, url, section);
		});
		// Запрос ресурса, используя сервисного рабочего
		// в качестве прокси, формирования специального адреса
		//на который установлен фильтр.
		fetch('./cookbook-proxy/' + url, init).then(function(response) {
			//Подготовка логирования удачного выполнения
			fetchSuccess(response, './cookbook-proxy/' + url, 'proxy-' + section);
		}).catch(function(error) {
			//Подготовка логирования не удачного выполнения
			fetchCatch(error, './cookbook-proxy/' + url, 'proxy-' + section);
		});
	};
}

// Функция логирования в консоль и запуск логирования и интерфейс
function fetchSuccess(response, url, section) {
	if (response.ok) {
		console.log(section, 'УДАЧНО: ', url, response);
		log(section, 'УДАЧНО');
	} else {
		console.log(section, 'НЕ УДАЧНО:', url, response);
		log(section, 'НЕ УДАЧНО: тип ответа: ' + response.type +
			', статус ответа: ' + response.status, 'error');
	}
}

function fetchCatch(error, url, section) {
	console.log(section, 'ОШИБКА: ', url, error);
	log(section, 'ОШИБКА: ' + error, 'error');
}
//Функция логирования в интерфейс пользователя
function log(section, message, type) {
	var sectionElement = document.getElementById(section);
	var logElement = document.createElement('p');
	if (type) {
		logElement.classList.add(type);
	}
	logElement.textContent = message;
	sectionElement.appendChild(logElement);
}