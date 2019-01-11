import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-cache-update-refresh-intro',
  templateUrl: './cache-update-refresh-intro.component.html',
})
export class CacheUpdateRefreshIntroComponent implements OnInit, AfterViewInit {

	constructor(@Inject(Router) private router : Router, @Inject(CommunicateService) public communicationService : CommunicateService) { }

	public menuButtons = [
		{link : "/caching-strategies/cache-update-refresh/(intro//aux:demo)", activeMenuButton : true}, {link : '/caching-strategies/cache-update-refresh/(intro//aux:index)'}, {link : '/caching-strategies/cache-update-refresh/(intro//aux:worker)'},  {link : '/caching-strategies/cache-update-refresh/(intro//aux:server)'}
	];
	public introContext = {
		header : 'Кэш - обновление - отображение',
		title : 'Стратегии кэширования',
		category : {class : 'dark-gr', text : '2'},
		complexity : {class : 'dark-sr', text : 'Ср', tip : 'Сложность средняя'},
		tipBlockText : 'Решение : Получать контент из кэша, запросить новую версию контента с сервера и при получении ответа дать интерфейс пользователю для интерактивного обновления контента.',
		introText : 'Описание : В некоторых случаях необходимо стразу ответить клиенту не заставляя его ожидать серверного ответа. Сервисный рабочий сразу отвечает на запрос ресурса из кэша, для быстрого ответа клиенту и сразу делает запрос в сеть, когда ответ сети готов, обновляется пользовательский интерфейс с подсказкой об обновлении нового контента.'
	} ;

	ngOnInit() {
		this.router.navigateByUrl(this.menuButtons[0].link);
	}

	ngAfterViewInit(){
		this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Кэш - обновление - отображение'});
	}

}
