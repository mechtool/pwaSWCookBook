import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-network-cache-service',
  templateUrl: './network-cache-service.component.html',
  styleUrls: ['./network-cache-service.component.css']
})
export class NetworkCacheServiceComponent implements OnInit {
    
    constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }
    
    ngOnInit() {
	this.communicationService.sendResource({type : 'aux', button : 2});
    }

}
