import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmediateClaimRoutingModule } from './immediate-claim-routing.module';
import {ImmediateClaimIntroComponent} from "./components/immediate-claim-intro/immediate-claim-intro.component";
import {ImmediateClaimDemoComponent} from "./components/immediate-claim-demo/immediate-claim-demo.component";
import {AppComponentsModule} from "../../../../components/app-components.module";
//------------------material------------------------
import { MatCardModule } from "@angular/material";
import {GeneralUsageModule} from "../../general-usage.module";

@NgModule({
  imports: [
    CommonModule,
	AppComponentsModule,
	GeneralUsageModule,
	ImmediateClaimRoutingModule,
	  //-----------material-------------------
	  MatCardModule,
  ],
  declarations: [
	ImmediateClaimIntroComponent,
	ImmediateClaimDemoComponent,
  ]
})
export class ImmediateClaimModule { }
