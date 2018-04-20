import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-network-cache-worker',
  templateUrl: './network-cache-worker.component.html',
  styleUrls: ['./network-cache-worker.component.css']
})
export class NetworkCacheWorkerComponent implements OnInit {
    
    constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }
    
    ngOnInit() {
	this.communicationService.sendResource({type : 'aux', button : 3});
    }

}
