import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-cache-only-demo',
  templateUrl: './cache-only-demo.component.html',
})
export class CacheOnlyDemoComponent implements OnInit {

	public demoContext = {header : 'Страница демонстрации стратегии только кэш.', src :'/assets/cache-strategy/cache-only-demo/cache-only-demo.html'};

	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 0});
	}

}
