import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralUsageRoutingModule } from './general-usage-routing.module';
import { GeneralUsageComponent } from './general-usage.component';
import {MatCardModule} from "@angular/material";
import {AppComponentsModule} from "../../components/app-components.module";
import {CommonGeneralUsageDemoComponent} from "./components/common-general-usage-demo/common-general-usage-demo.component";

@NgModule({
  imports: [
    CommonModule,
	AppComponentsModule,
	GeneralUsageRoutingModule,
	  //----------------material-------------------
	  MatCardModule
  ],
  declarations: [
	GeneralUsageComponent,
	CommonGeneralUsageDemoComponent,

  ],
	exports : [
		CommonGeneralUsageDemoComponent,
	]
})
export class GeneralUsageModule { }
