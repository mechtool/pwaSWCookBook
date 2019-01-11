import {AfterViewInit, Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-common-demo',
  templateUrl: './common-demo.component.html',
  styleUrls: ['./common-demo.component.css']
})
export class CommonDemoComponent implements AfterViewInit{

    @Input() public context : any;
    @ViewChild('iframe', {read : ElementRef}) private iframe : ElementRef ;
    
    constructor(@Inject(DomSanitizer) public sanitizer : DomSanitizer) { } ;
    
    ngAfterViewInit(){
        
	this.iframe.nativeElement.addEventListener('load', (event)=>{//установка высоты фрейма по высоте содержимого
	    let target = event.target;
	    setTimeout(()=>{target.style.height = target.contentWindow.document.documentElement.getClientRects()[0].height + 'px'})}, 300);
    }
    
    onClickReload(){
	this.iframe.nativeElement.contentWindow.location.reload();
    }

}
