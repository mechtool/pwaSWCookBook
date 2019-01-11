import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-cache-update-intro',
  templateUrl: './cache-update-intro.component.html',
})
export class CacheUpdateIntroComponent implements AfterViewInit, OnInit {

	constructor(@Inject(Router) private router : Router, @Inject(CommunicateService) public communicationService : CommunicateService) { }

	public menuButtons = [
		{link : "/caching-strategies/cache-update/(intro//aux:demo)", activeMenuButton : true}, {link : '/caching-strategies/cache-update/(intro//aux:index)'}, {link : '/caching-strategies/cache-update/(intro//aux:worker)'},  {link : '/caching-strategies/cache-update/(intro//aux:server)'}
	];
	public introContext = {
		header : 'Кэш и обновление',
		title : 'Стратегии кэширования',
		category : {class : 'dark-gr', text : '2'},
		complexity : {class : 'dark-nv', text : 'Нв', tip : 'Сложность начальная'},
		tipBlockText : 'Решение : Запросить ресурс из кэша, а так же выполнить запрос ресурса удаленно, для получения свежего экземпляра, которым обновить кэш, что бы в следующий раз воспользоваться этой версией ресурса из кэша.',
		introText : 'Описание : Пример работы сервисного рабочего, запрашивающего ресурс из кэша для быстрого ответа клиенту, а затем запрашивающего ресурс с сервера и обновляющего им кэш.'
	} ;

	ngOnInit() {
		this.router.navigateByUrl(this.menuButtons[0].link);
	}

	ngAfterViewInit(){
		this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Кэш и обновление'});
	}

}
