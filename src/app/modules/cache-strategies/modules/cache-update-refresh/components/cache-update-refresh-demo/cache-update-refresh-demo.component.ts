import { Component, Inject, OnInit } from '@angular/core';
import { CommunicateService } from "../../../../../../services/app-service.service";

@Component ({
  selector: 'app-cache-update-refresh-demo',
  templateUrl: './cache-update-refresh-demo.component.html',
})
export class CacheUpdateRefreshDemoComponent implements OnInit {

    public demoContext = {header : 'Страница демонстрации стратегии кэш, обновление и отображение.', src :'/assets/cache-strategy/cache-update-refresh-demo/cache-update-refresh-demo.html'};
    
    constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }
    
    ngOnInit() {
    	this.communicationService.sendResource({type : 'aux', index : 0});
    }
}
