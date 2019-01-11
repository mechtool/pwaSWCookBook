import {Component, Input } from '@angular/core';
import {SideNavItemClass} from "../../services/app-service.service";

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.css']
})
export class SideNavItemComponent{

    @Input() public item : SideNavItemClass;
    
    constructor(){}
    
    onClickSideNavItem($event : MouseEvent){ //открытие меню оглавления, изменение иконок
        
        let current =  $event.currentTarget as Element & HTMLElement,
	    active = current.classList.contains('active'), //текущее состояние (открыт или закрыт)
	    itemBlock1 = ($event.target as Element).closest('.itemBlock1') ;
	
	if(current.children.length < 2 || itemBlock1) { //если нет дочерних, то не открывать
	    return;
	}
 
	current.style.height = (active ? '42px': (current.children.length ? 42 * current.children.length : 42)+'px'); //открыть или закрыть
	(current.firstElementChild.querySelector('mat-icon') as HTMLElement).textContent = active ? 'remove' : 'sort';//изменение иконки
        current.classList.toggle('active'); //признак открытия или закрытия
	
    }
}
