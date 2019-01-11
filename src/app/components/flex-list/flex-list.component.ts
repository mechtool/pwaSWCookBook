import {Component, Inject, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: 'app-flex-list',
  templateUrl: './flex-list.component.html',
  styleUrls: ['./flex-list.component.css']
})
export class FlexListComponent {
    
    @Input() public list : any[];
    
    constructor(@Inject(DomSanitizer) public sanitizer : DomSanitizer, @Inject(Router) public router : Router ){} ;
    
    onClickRecipe(link){
        this.router.navigateByUrl(link);
        
    }


}
