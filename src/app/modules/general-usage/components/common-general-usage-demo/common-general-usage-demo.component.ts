import {AfterViewInit, Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-common-general-usage-demo',
  templateUrl: './common-general-usage-demo.component.html',
  styleUrls: ['./common-general-usage-demo.component.css']
})
export class CommonGeneralUsageDemoComponent implements AfterViewInit{

    @Input() public context : any;
    @ViewChild('iframe', {read : ElementRef}) private iframe : ElementRef ;
    
    constructor(@Inject(DomSanitizer) public sanitizer : DomSanitizer) { } ;
    
    ngAfterViewInit(){
        
	this.iframe.nativeElement.addEventListener('load', (event)=>{//установка высоты фрейма по высоте содержимого
	    let target = event.target;
	    setTimeout(()=>{
	    	target.style.height = target.contentWindow.document.body.clientHeight + 'px'})}, 300);
    }

}
