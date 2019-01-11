import { Component, Inject, OnInit } from '@angular/core';
import { CommunicateService } from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-network-cache-demo',
  templateUrl: './network-cache-demo.component.html',
})
export class NetworkCacheDemoComponent implements OnInit {

    public demoContext = {header : 'Страница демонстрации стратегии сеть или кэш.', src :'/assets/cache-strategy/network-cache-demo/network-cache-demo.html'};
    
    constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }
    
    ngOnInit() {
    	this.communicationService.sendResource({type : 'aux', index : 0});
    }
}
