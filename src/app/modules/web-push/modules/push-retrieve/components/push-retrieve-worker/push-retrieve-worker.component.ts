import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-push-retrieve-worker',
  templateUrl: './push-retrieve-worker.component.html',
})
export class PushRetrieveWorkerComponent implements OnInit {


	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 2});
	}

}
