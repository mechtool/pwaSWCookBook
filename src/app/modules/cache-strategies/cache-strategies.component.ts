import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../services/app-service.service";

@Component ({
  selector: 'app-cache-strategies',
  templateUrl: './cache-strategies.component.html',
})
export class CacheStrategiesComponent implements OnInit {

	public menuButtons = [
		{disable : true}, {disable : true}, {disable : true}, {disable : true},
	];
	public recipes = [
		{color : '#21a01a', mark : 'Нв', header : 'Сеть или кэш', text :'Сервисный рабочий в этом рецепте пытается получить более свежий контент из сети, но если запрос в сеть занимает много времени, контент получается из кэша.', link : '/caching-strategies/network-cache/(intro//aux:demo)'},
		{color : '#21a01a', mark : 'Нв', header : 'Только кэш', text :'Это пример показывает сервисного рабочего отвечающего всегда из кэша по событию <span class="dark-purple">fetch</span>', link :  '/caching-strategies/cache-only/(intro//aux:demo)'},
		{color : '#21a01a', mark : 'Нв', header : 'Кэш и обновление', text :'Пример представляет сервисного рабочего загружающего клиенту ресурс из кэша для обеспечения быстрого отклика на запрос, а после этого он обновляет запись в кэше этого ресурса из сети.', link : '/caching-strategies/cache-update/(intro//aux:demo)'},
		{color : '#e16800', mark : 'Ср', header : 'Кэш, обновление и отображение', text :'Пример сервисного рабочего загружающего ресурс из кэша для обеспечения скорейшего отклика, после чего он обновляет запись кэша ресурсов из сети, после чего интерфейс клиента обновляется автоматически, применив новые данные.', link : '/caching-strategies/cache-update-refresh/(intro//aux:demo)'},
		{color : '#e16800', mark : 'Ср', header : 'Встроенный резерв.', text: 'Пример сервисного рабочего загружающего встроенный в код шаблон, при отсутствии ресурса в сети или отсутствие соединения.', link : '/caching-strategies/embedded-fallback/(intro//aux:demo)'},
		];

	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }
	
	ngOnInit() {
		this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Стратегии кэширования'});
	}

}
