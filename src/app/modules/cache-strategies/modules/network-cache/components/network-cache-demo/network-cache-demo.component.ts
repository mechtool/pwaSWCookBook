import { Component, Inject, OnInit } from '@angular/core';
import { CommunicateService } from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-network-cache-demo',
  templateUrl: './network-cache-demo.component.html',
  styleUrls: ['./network-cache-demo.component.css']
})
export class NetworkCacheDemoComponent implements OnInit {

    public demoContext = {controlled : {src :'/assets/cache-strategy/network-cache-demo/controlled/controlled.html', title : 'Сеть или кэш.', footer : 'Этот запрос исходит от контролируемой сервисным рабочим страницы, поэтому изображение будет загружено через него. Он будет пытаться получить обновленный контент с сервера, но если ответ не придет в диапазоне 10 секунд, он загрузит картинку из кэша.'}, notControlled : {src :'/assets/cache-strategy/network-cache-demo/not-controlled/not-controlled.html', title : 'Всегда синхронизирована с сервером.', footer : 'Запрос картинки происходит со страницы не контролируемой сервисным рабочим, поэтому при перезагрузке, адрес изображения всегда синхронизирован с адресом картинки, генерируемой сервером.'}};
    
    constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }
    
    ngOnInit() {
    this.communicationService.sendResource({type : 'aux', button : 0});
    }
}
