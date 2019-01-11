import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-network-cache-worker',
  templateUrl: './cache-only-worker.component.html',
})
export class CacheOnlyWorkerComponent implements OnInit {
    
    constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }
    
    ngOnInit() {
	this.communicationService.sendResource({type : 'aux', index : 2});
    }

}
