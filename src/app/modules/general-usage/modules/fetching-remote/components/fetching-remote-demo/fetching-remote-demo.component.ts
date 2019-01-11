import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-fetching-remote-demo',
  templateUrl: './fetching-remote-demo.component.html',
})
export class FetchingRemoteDemoComponent implements OnInit {
	public demoContext = {header : 'Страница демонстрации загрузки удаленных ресурсов.', src :'/assets/general-usage/fetching-remote-demo/fetching-remote-demo.html'};

	constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }

	ngOnInit() {
		this.communicationService.sendResource({type : 'aux', index : 0});
	}

}
