import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-message-relay-worker',
  templateUrl: './message-relay-worker.component.html',
})
export class MessageRelayWorkerComponent implements OnInit {

	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 2});
	}

}
