import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-push-retrieve-intro',
  templateUrl: './push-retrieve-intro.component.html',
})
export class PushRetrieveIntroComponent implements OnInit {

	constructor(@Inject(Router) private router : Router, @Inject(CommunicateService) public communicationService : CommunicateService) { }

	public menuButtons = [
		{text : 'Demo', link : "/web-push/push-retrieve/(intro//aux:demo)", activeMenuButton : true}, {text : 'index.js', link : '/web-push/push-retrieve/(intro//aux:index)'}, {text : 'service-worker.js',link : '/web-push/push-retrieve/(intro//aux:worker)'}, {text : 'server.js', link : '/web-push/push-retrieve/(intro//aux:server)'}
	];
	public introContext = {
		header : 'Отправка сообщения и запрос данных',
		title : '',
		category : {class : 'dark-gr', text : '3'},
		complexity : {class : 'dark-nv', text : 'Нв', tip : 'Сложность начальная'},
		tipBlockText : 'Решение : Регистрация сервисного рабочего для получения уведомлений, подписка на уведомления, сохранение объекта регистрации на сервере',
		introText : 'Описание : Пример отправки уведомления и получения данных после доставки уведомления.'
	} ;

	ngOnInit() {
		this.router.navigateByUrl(this.menuButtons[0].link);
	}

	ngAfterViewInit() {
		this.communicationService.sendResource({type: 'intro', menuButtons: this.menuButtons, appTitle: 'Отправка сообщения и запрос данных'});
	}

}
