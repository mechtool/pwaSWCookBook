import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tip-block',
  templateUrl: './tip-block.component.html',
  styleUrls: ['./tip-block.component.css']
})
export class TipBlockComponent {
    @Input() public context : {color? : string, icon? : string};

}
