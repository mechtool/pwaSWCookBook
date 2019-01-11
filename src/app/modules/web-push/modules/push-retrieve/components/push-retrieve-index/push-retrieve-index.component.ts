import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-push-retrieve-index',
  templateUrl: './push-retrieve-index.component.html',
})
export class PushRetrieveIndexComponent implements OnInit {


	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 1});
	}

}
