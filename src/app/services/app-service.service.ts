import {Inject, Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CommunicateService{ //сервис для передачи списка элементов навигации, соответствуюего определенному
    //модулю приложения
    private communicateSubject : Subject<any> = new Subject<any>();
    public communicateObservable : Observable<any> = this.communicateSubject.asObservable();
    sendResource(resource){
	this.communicateSubject.next(resource);
    }
}
@Injectable()
export class RouterService {
    
    static context : any;
    
    constructor(){} ;
}

export class SideNavItemClass {
    constructor(public text : string = '', public className : string = '', public color : string = '', public href : string = '/', public title  : string = '', public icon : string = '', public children : SideNavItemClass[] = []){}
}

export class MenuButton{
    constructor(public text : string, public link? : string | boolean, public icon? : string, public disable? : boolean, public activeMenuButton?:boolean){}
}
