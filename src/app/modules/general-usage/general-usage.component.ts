import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../services/app-service.service";

@Component({
  selector: 'app-general-usage',
  templateUrl: './general-usage.component.html',
})
export class GeneralUsageComponent implements OnInit{

	public menuButtons = [
		{disable : true}, {disable : true}, {disable : true}, {disable : true},
	];

	public recipes = [
		{color : '#21a01a', mark : 'Нв', header : 'Немедленный контроль', text: 'Пример получения немедленного контроля сервисным рабочим над клиентами, без необходимости ожидания события навигации', link : '/general-usage/immediate-claim/(intro//aux:demo)'},
		{color : '#21a01a', mark : 'Нр', header : 'Передача сообщений', text: 'Пример коммуникации между сервисным рабочим и страницей, показывающей использование сервисного рабочего для передачи сообщений между страницами.', link : '/general-usage/message-relay/(intro//aux:demo)'},
		{color : '#e16800', mark : 'Ср', header : 'Получение ресурсов', text: 'Пример двух стандартных способов загрузки удаленных ресурсов и один способ использования сервисного рабочего как промежуточного прокси.', link : ''},
		{color : '#a00100', mark : 'Пр', header : 'Реальные блок-схемы', text: 'Пример изучения работы сервисных рабочих через отображение потоковых диаграм процесса сервисного рабочего, и логирование на экране действий, выполненных веб приложением, запускающим этих сервисных рабочих.', link : ''},
	];

	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Общее использование'});
	}

}
