import {Component, Inject, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-intro-block',
  templateUrl: './intro-block.component.html',
  styleUrls: ['./intro-block.component.css']
})
export class IntroBlockComponent {
    @Input() public context : any;

    constructor(@Inject(DomSanitizer) public sanitizer : DomSanitizer){}

}
