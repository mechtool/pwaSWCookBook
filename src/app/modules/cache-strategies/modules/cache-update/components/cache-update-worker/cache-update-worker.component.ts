import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-cache-update-worker',
  templateUrl: './cache-update-worker.component.html',
})
export class CacheUpdateWorkerComponent implements OnInit {
    
    constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }
    
    ngOnInit() {
	this.communicationService.sendResource({type : 'aux', index : 2});
    }

}
