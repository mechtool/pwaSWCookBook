import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
//-------------------material---------------------------
import { MatIconModule, MatTooltipModule, MatCardModule } from "@angular/material";

import { FlexListComponent } from "./flex-list/flex-list.component";
import { SideNavItemComponent} from "./side-nav-item/side-nav-item.component";
import { TipBlockComponent } from "./tip-block/tip-block.component";
import { IntroBlockComponent } from './intro-block/intro-block.component';

@NgModule({
    imports : [
        CommonModule,
	RouterModule,
	//--------material----------------
	MatTooltipModule,
	MatIconModule,
	MatCardModule,

    ],
    declarations: [
	TipBlockComponent,
	FlexListComponent,
	SideNavItemComponent,
	IntroBlockComponent,
    ],
    exports : [
        TipBlockComponent,
	FlexListComponent,
	SideNavItemComponent,
	IntroBlockComponent,
    ]
})
export class AppComponentsModule {}