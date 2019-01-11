import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-network-cache-intro',
  templateUrl: './network-cache-intro.component.html',
})
export class NetworkCacheIntroComponent implements OnInit, AfterViewInit {

  constructor(@Inject(Router) private router : Router, @Inject(CommunicateService) public communicationService : CommunicateService) { }
  
  public menuButtons = [
	{link : "/caching-strategies/network-cache/(intro//aux:demo)", activeMenuButton : true}, {link : '/caching-strategies/network-cache/(intro//aux:index)'}, {link : '/caching-strategies/network-cache/(intro//aux:worker)'},  {link : '/caching-strategies/network-cache/(intro//aux:server)'}
    ];
  public introContext = {
      header : 'Сеть или кэш',
	  title : 'Стратегии кэширования',
      category : {class : 'dark-gr', text : '2'},
      complexity : {class : 'dark-nv', text : 'Нв', tip : 'Сложность начальная'},
      tipBlockText : 'Решение : Запросить контент с сервера, предусмотрев таймер отката в кэш, для получения кэшированных данных, если время ожидания с сервера истекло.',
      introText : 'Описание : При первом запуске на клиенте, регистрируется сервисный рабочий с контекстом обработки клиентов (область файловой системы сервера, запросы ресурсов  из которой будут перехвачены сервисным рабочим) и происходит предзагрузка ресурсов в кэш. Каждые 10 секунд сервер может генерировать адрес новой картинки. Левая область - всегда синхронизирована с сервером, поэтому при перезагрузке (нажатии на кнопку "Перезагрузить") в ней всегда будет появляться новая картанка, если с предыдущего момента генерации картинки прошло более 10 секунд. Правая область - обслуживается сервисным рабочим (входит в контекст обработки и является клиентом сервисного рабочего) и при нажатии на кнопку перезагрузки он пытается запросить картинку с сервера, поскольку все запросы его клиентов, после его активации, происходят через него. Если запрос длиться более 400ms (срабатывает задержка перехода в кэш) или произошел сбой выгрузки на сервере, сервисный рабочий идет в кэш и загружает сохраненную в кэше при первом запуске картинку, иначе - отображает полученную с сервера.'
  } ;
  
  ngOnInit() {
		this.router.navigateByUrl(this.menuButtons[0].link);
	}
  
    ngAfterViewInit(){
		this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Сеть или кэш'});
    }

}
