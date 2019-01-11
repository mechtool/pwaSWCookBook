import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-embedded-fallback-intro',
  templateUrl: './embedded-fallback-intro.component.html',
})
export class EmbeddedFallbackIntroComponent implements OnInit, AfterViewInit {

	constructor(@Inject(Router) private router : Router, @Inject(CommunicateService) public communicationService : CommunicateService) { }

	public menuButtons = [
		{link : "/caching-strategies/embedded-fallback/(intro//aux:demo)", activeMenuButton : true}, {link : '/caching-strategies/embedded-fallback/(intro//aux:index)'}, {link : '/caching-strategies/embedded-fallback/(intro//aux:worker)'},  {link : '/caching-strategies/embedded-fallback/(intro//aux:server)'}
	];
	public introContext = {
		header : 'Встроенный резерв',
		title : 'Стратегии кэширования',
		category : {class : 'dark-gr', text : '2'},
		complexity : {class : 'dark-sr', text : 'Ср', tip : 'Сложность средняя'},
		tipBlockText : 'Решение : Встроить резервное содержимое и передавать его клиенту в случае неудачи запроса ресурса.',
		introText : 'Описание : Пример сервисного рабочего получающего и передающего запасной ресурс в случае неудачи запроса на сервер. Применяется для гарантии получения пользователем содержимого, даже если сеть недоступна.'
	} ;

	ngOnInit() {
		this.router.navigateByUrl(this.menuButtons[0].link);
	}

	ngAfterViewInit(){
		this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Сеть или кэш'});
	}

}
