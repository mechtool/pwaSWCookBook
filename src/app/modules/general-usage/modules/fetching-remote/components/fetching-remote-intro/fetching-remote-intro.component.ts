import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fetching-remote-intro',
  templateUrl: './fetching-remote-intro.component.html',
})
export class FetchingRemoteIntroComponent implements OnInit {

	constructor(@Inject(Router) private router : Router, @Inject(CommunicateService) public communicationService : CommunicateService) { }

	public menuButtons = [
		{text : 'Demo', link : "/general-usage/fetching-remote/(intro//aux:demo)", activeMenuButton : true}, {text : 'index.js', link : '/general-usage/fetching-remote/(intro//aux:index)'}, {text : 'service-worker.js',link : '/general-usage/fetching-remote/(intro//aux:worker)'}, {text : '', link : '', disable : true}
	];
	public introContext = {
		header : 'Получение удаленных ресурсов',
		title : 'Общее использование',
		category : {class : 'dark-gr', text : '4'},
		complexity : {class : 'dark-sr', text : 'Ср', tip : 'Сложность средняя'},
		tipBlockText : 'Решение : Регистрация сервисного рабочего для иммитации прокси, использование <span class="dark-red">Fetch API</span> при старте страницы с установленным и не установленным заголовком кросдоменного доступа.',
		introText : 'Описание : Пример, показывающий два стандартных способа загрузки удаленных ресурсов(загрузка ресурса через атрибут <span class="dark-red">DOM</span> элемента; загрузка ресурса используя <span class="dark-red">Fetch API</span> без сервисного рабочего) и один способ использования сервисного рабочего в качестве прокси. Здесь существуют три типа загрузки удаленных ресурсов: небезопасный - загружается по протоколу <span class="dark-red">http</span>, безопасный 1 - загружается по протоколу <span class="dark-red">https</span>, используя заголовок <span class="dark-red">allow-origin</span>, и безопасный 2 - загружается по протоколу <span class="dark-red">https</span>, но без заголовка <span class="dark-red">allow-origin</span>. При загрузке страницы в её скриптовом файле создаются и вставляются в документ три элемента изображения (&#60;img&#62;), каждый из которых для загрузки своего содержимого получает отдельный адрес, что заставляет браузер сделать запрос, минуя сервисного рабочего, поскольку в нем установлен фильтр на URL(адрес) определенного формата. Затем происходит цикл для двух режимов загрузки ресурса (с установленным значение заголовка кроссбраузерного режима запроса и без него), создавая шесть запросов (6 запросов (3 запроса для 	режима <span class="dark-red">CORS</span> и 3 - для режима <span class="dark-red">NO-CORS</span> ) через <span class="dark-red">Fetch API</span> со страницы скрипта  и такие же 6 запросов через <span class="dark-red">Fetch API</span> но уже через экземпляр сервисного рабочего, формируя теже URL-ы таким образом, чтобы они перехватывались им). Все эти действия логируются и выводятся в интерфейс пользователю.'
	} ;

	ngOnInit() {
		this.router.navigateByUrl(this.menuButtons[0].link);
	}

	ngAfterViewInit(){
		this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Получение удаленных ресурсов'});
	}
}
