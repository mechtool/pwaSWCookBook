import {Component, Inject, OnInit} from '@angular/core';
import {CommunicateService} from "../../../../../../services/app-service.service";

@Component({
  selector: 'app-network-cache-index',
  templateUrl: './network-cache-index.component.html',
  styleUrls: ['./network-cache-index.component.css']
})
export class NetworkCacheIndexComponent implements OnInit {
    
    constructor(@Inject(CommunicateService) private communicationService : CommunicateService) { }
    
    ngOnInit() {
	this.communicationService.sendResource({type : 'aux', button : 1});
    }

}
