import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-push-retrieve-server',
  templateUrl: './push-retrieve-server.component.html',
})
export class PushRetrieveServerComponent implements OnInit {


	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 3});
	}

}
