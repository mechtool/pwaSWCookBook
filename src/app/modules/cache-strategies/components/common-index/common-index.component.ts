import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../services/app-service.service";

@Component({
  selector: 'app-network-cache-index',
  templateUrl: './common-index.component.html',
})
export class CommonIndexComponent implements OnInit {
    
    constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }
    
    ngOnInit() {
	this.communicationService.sendResource({type : 'aux', index : 1});
    }

}
