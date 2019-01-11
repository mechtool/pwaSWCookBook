import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-fetching-remote-worker',
  templateUrl: './fetching-remote-worker.component.html',
})
export class FetchingRemoteWorkerComponent implements OnInit {
	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 2});
	}
}
