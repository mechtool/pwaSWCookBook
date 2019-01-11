import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
//-------------------material---------------------------
import { MatIconModule, MatTooltipModule, MatCardModule, MatProgressBarModule} from "@angular/material";

import { FlexListComponent } from "./flex-list/flex-list.component";
import { SideNavItemComponent} from "./side-nav-item/side-nav-item.component";
import { TipBlockComponent } from "./tip-block/tip-block.component";
import { IntroBlockComponent } from './intro-block/intro-block.component';
import { CodeBlockComponent } from './code-block/code-block.component';
import { RoutingProgressComponent } from './routing-progress/routing-progress.component';

@NgModule({
    imports : [
	CommonModule,
	RouterModule,
	//--------material----------------
	MatTooltipModule,
	MatIconModule,
	MatCardModule,
		MatProgressBarModule,

    ],
    declarations: [
	TipBlockComponent,
	FlexListComponent,
	SideNavItemComponent,
	IntroBlockComponent,
	CodeBlockComponent,
	RoutingProgressComponent,
    ],
    exports : [
	TipBlockComponent,
	FlexListComponent,
	SideNavItemComponent,
	IntroBlockComponent,
	CodeBlockComponent,
	RoutingProgressComponent,
	]
})
export class AppComponentsModule {}