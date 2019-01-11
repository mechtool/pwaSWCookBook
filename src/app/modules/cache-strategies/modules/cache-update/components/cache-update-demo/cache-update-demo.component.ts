import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-cache-update-demo',
  templateUrl: './cache-update-demo.component.html',
})
export class CacheUpdateDemoComponent implements OnInit {

	public demoContext = {header : 'Страница демонстрации стратегии кэш и обновление.', src :'/assets/cache-strategy/cache-update-demo/cache-update-demo.html'};

	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 0});
	}

}
