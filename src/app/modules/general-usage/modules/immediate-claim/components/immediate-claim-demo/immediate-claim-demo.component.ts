import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-immediate-claim-demo',
  templateUrl: './immediate-claim-demo.component.html',
})
export class ImmediateClaimDemoComponent implements OnInit {

	public demoContext = {header : 'Страница демонстрации немедленного контроля.', src :'/assets/general-usage/immediate-claim-demo/immediate-claim-demo.html'};

	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 0});
	}

}
