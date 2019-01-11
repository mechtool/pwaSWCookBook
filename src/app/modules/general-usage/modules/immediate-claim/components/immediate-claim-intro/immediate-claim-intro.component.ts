import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-immediate-claim-intro',
  templateUrl: './immediate-claim-intro.component.html',
})
export class ImmediateClaimIntroComponent implements AfterViewInit, OnInit {

	constructor(@Inject(Router) private router : Router, @Inject(CommunicateService) public communicationService : CommunicateService) { }

	public menuButtons = [
		{text : 'Demo', link : "/general-usage/immediate-claim/(intro//aux:demo)", activeMenuButton : true}, {text : 'index.js', link : '/general-usage/immediate-claim/(intro//aux:index)'}, {text : 'service-worker.js',link : '/general-usage/immediate-claim/(intro//aux:worker)'},  {text : 'server.js',link : '/general-usage/immediate-claim/(intro//aux:server)'}
	];
	public introContext = {
		header : 'Немедленный контроль',
		title : 'Общее использование',
		category : {class : 'dark-gr', text : '2'},
		complexity : {class : 'dark-nv', text : 'Нв', tip : 'Сложность начальная'},
		tipBlockText : 'Решение : Регистрация сервисного рабочего, удаление старого кэша (если существует), немедленное требование сервисного рабочего.',
		introText : 'Описание : Пример получение немедленного контроля сервисного рабочего над клиентами без ожидания события навигации. Базовая регистрация сервисного рабочего требует активации события навигации до начала работы сервисного рабочего. Данный пример иллюстрирует запуск сервисного рабочего минуя это событие. При запуске страницы, в контекст устанавливается сервисный рабочий и в событии установки он лезет на сервер за картинкой и, при её успешном получении удаляет кэш старой картинки(если он есть), и помещает её в новый кэш приложения. Сразу после этого запускается метод пропуска ожидания события навигации, что заставляет сервисного рабочего взять контроль над страницами(скриптами)-клиентами и немедленно начать перехватывать любую сетевую активность своих клиентов, затем вызывается метод обновления элемента изображения(значение атрибута адреса изменяется, следует сетевой запрос картинки, который перехватывает сервисный рабочий, направляя его в кэш в котором уже находиться новая картинка), отображая новую картинку. После нажатия на кнопку обновления сервесного рабочего, в файл сервисного рабочего, приходящий с сервера, добавляются некоторые записи, что изменяет объем файла в байтах. По этому признаку браузер понимает, что версия файла сервисного рабочего изменена и поэтому, он требует полной установки. И цикл повторяется.'
	} ;

	ngOnInit() {
		this.router.navigateByUrl(this.menuButtons[0].link);
	}

	ngAfterViewInit(){
		this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Немедленный контроль'});
	}

}
