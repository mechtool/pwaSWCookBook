import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-embedded-fallback-demo',
  templateUrl: './embedded-fallback-demo.component.html',
})
export class EmbeddedFallbackDemoComponent implements OnInit {


	public demoContext = {header : 'Страница демонстрации стратегии встроенного резерва.', src :'/assets/cache-strategy/embedded-fallback-demo/embedded-fallback-demo.html'};

	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 0});
	}

}
