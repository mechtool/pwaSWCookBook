import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../services/app-service.service";

@Component({
  selector: 'app-cache-strategies-server',
  templateUrl: './common-server.component.html',
})
export class CommonServerComponent implements OnInit {
    
    constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }
    
    ngOnInit() {
	this.communicationService.sendResource({type : 'aux', index : 3});
    }

}
