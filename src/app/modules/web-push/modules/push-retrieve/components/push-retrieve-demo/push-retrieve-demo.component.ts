import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-push-retrieve-demo',
  templateUrl: './push-retrieve-demo.component.html',
})
export class PushRetrieveDemoComponent implements OnInit {

	public demoContext = {header : 'Страница демонстрации отптавки уведомления с данными.', src :'/assets/web-push/push-retrieve-demo/push-retrieve-demo.html'};

	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 0});
	}


}
