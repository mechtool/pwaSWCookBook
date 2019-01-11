import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-cache-only-intro',
  templateUrl: './cache-only-intro.component.html',
})
export class CacheOnlyIntroComponent implements AfterViewInit, OnInit {

	constructor(@Inject(Router) private router : Router, @Inject(CommunicateService) public communicationService : CommunicateService) { }
	public menuButtons = [
		{text : 'Demo', link : "/caching-strategies/cache-only/(intro//aux:demo)", activeMenuButton : true}, {text : 'index.js', link : '/caching-strategies/cache-only/(intro//aux:index)'}, {text : 'service-worker.js', link : '/caching-strategies/cache-only/(intro//aux:worker)'},  {text : 'server.js', link : '/caching-strategies/cache-only/(intro//aux:server)'}
	];
	public introContext = {
		header : 'Только кэш',
		title : 'Стратегии кэширования',
		category : {class : 'dark-gr', text : '2'},
		complexity : {class : 'dark-nv', text : 'Нв', tip : 'Сложность начальная'},
		tipBlockText : 'Решение : Добавить статический контент в кэш во время установки сервисного рабочего и использовать его вне зависимости от доступа к сети.',
		introText : 'Описание : Пример работы сервисного рабочего всегда отвечающего на запросы ресурса из кэша. Может использоваться для загрузки оболочки приложения в прогрессивных веб приложениях (PWA).'
	} ;

	ngOnInit() {
		this.router.navigateByUrl(this.menuButtons[0].link);
	}

	ngAfterViewInit(){
		this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Только кэш'});
	}

}
