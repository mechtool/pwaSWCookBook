import {AfterViewInit, Component, Inject, ChangeDetectorRef} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
	selector: 'app-routing-progress',
	templateUrl: './routing-progress.component.html',
	host : {
		'[style.width]': '"100%"',
	}
})
export class RoutingProgressComponent implements AfterViewInit{
	
	public load : boolean;
	
	constructor(@Inject(Router) private router : Router, @Inject(ChangeDetectorRef) private  changeRef : ChangeDetectorRef){
		this.load = false;
	}
	
	ngAfterViewInit(){
		this.router.events.subscribe((event) => {
			if(event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationCancel){
				this.load = event instanceof NavigationStart;
				this.changeRef.detectChanges();
			}
			}
		)
	}
}
