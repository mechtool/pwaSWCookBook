import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-fetching-remote-index',
  templateUrl: './fetching-remote-index.component.html',
})
export class FetchingRemoteIndexComponent implements OnInit {

	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 1});
	}

}
