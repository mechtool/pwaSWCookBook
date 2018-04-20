import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-network-cache-intro',
  templateUrl: './network-cache-intro.component.html',
  styleUrls: ['./network-cache-intro.component.css']
})
export class NetworkCacheIntroComponent implements OnInit, AfterViewInit {

  constructor(@Inject(Router) private router : Router, @Inject(CommunicateService) public communicationService : CommunicateService) { }
  
  public menuButtons = [
	{link : "/caching-strategies/network-cache/(aux:demo)"}, {link : '/caching-strategies/network-cache/(aux:index)'}, {link : '/caching-strategies/network-cache/(aux:service)'}, {link : '/caching-strategies/network-cache/(aux:worker)'}
    ];
  public introContext = {
      header : 'Сеть или кэш',
      category : {class : 'dark-gr', text : '2'},
      complexity : {class : 'dark-nv', text : 'Нв', tip : 'Сложность начальная'},
      tipBlockText : 'Решение : Запросить контент с сервера, предусмотрев таймер отката в кэш, для получения кэшированных данных, если время ожидания с сервера истекло.',
      introText : 'Сервисный рабочий в этом примере пытается получить более свежий контент из сети, но если этот процесс затягивается, он забирает предварительно кэшированный ресурс.'
  } ;
  
  ngOnInit() {
       this.router.navigateByUrl(this.menuButtons[0].link);
  }
    ngAfterViewInit(){
	this.communicationService.sendResource({type : 'intro', menuButtons : this.menuButtons, appTitle : 'Сеть или кэш'});
    }

}
