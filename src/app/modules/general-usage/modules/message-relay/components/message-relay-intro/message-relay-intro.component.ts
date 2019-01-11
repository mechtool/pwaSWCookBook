import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-message-relay-intro',
  templateUrl: './message-relay-intro.component.html',
})
export class MessageRelayIntroComponent implements OnInit {

	constructor(@Inject(Router) private router : Router, @Inject(CommunicateService) public communicationService : CommunicateService) { }

	public menuButtons = [
		{text : 'Demo', link : "/general-usage/message-relay/(intro//aux:demo)", activeMenuButton : true}, {text : 'index.js', link : '/general-usage/message-relay/(intro//aux:index)'}, {text : 'service-worker.js', link : '/general-usage/message-relay/(intro//aux:worker)'}, {text : '', link : '', disable : true}];
	public introContext = {
		header : 'Передача сообщений',
		title : 'Общее использование',
		category : {class : 'dark-gr', text : '4'},
		complexity : {class : 'dark-nv', text : 'Нв', tip : 'Сложность начальная'},
		tipBlockText : 'Решение : Использование объекта регистрации сервисного рабочего и <span class="dark-red">Post Message API</span>',
		introText : 'Описание : Пример общения сервисного рабочего и его страниц-клиентов, показывающий работу механизма общения, используя <span class="dark-red">post message API</span> для передачи сообщений не только между контекстом <span class="dark-red">window</span> и <span class="dark-red">iframe</span>, но и обработки события <span class="dark-red">message</span>. При старте приложения в элемент <span class="dark-purple">iframe</span> загружается документ, который устанавливает сервисного рабочего, который имеет обработчик события <span class="dark-red">message</span>. После нажатия на кнопку, открывается дополнительная вкладка, в скрипте которой установлен обработчик события ввода данных в поле ввода, функция которого посылает сообщение, значение которого является введенные в текстовое поле ввода символы. Сервисный рабочий перехватывает это сообщение и отображает его на родительской открытой странице, как сообщение от клиента.'
	} ;

	ngOnInit() {
		this.router.navigateByUrl(this.menuButtons[0].link);
	}

	ngAfterViewInit(){
		this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Передача сообщений'});
	}

}
