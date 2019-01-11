import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-message-relay-demo',
  templateUrl: './message-relay-demo.component.html',
})
export class MessageRelayDemoComponent implements OnInit {

	public demoContext = {header : 'Страница демонстрации передачи сообщений.', src :'/assets/general-usage/message-relay-demo/message-relay-demo.html'};

	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 0});
	}
}
