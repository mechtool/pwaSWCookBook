import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushRetrieveRoutingModule } from './push-retrieve-routing.module';
import { PushRetrieveDemoComponent } from './components/push-retrieve-demo/push-retrieve-demo.component';
import { PushRetrieveIntroComponent } from './components/push-retrieve-intro/push-retrieve-intro.component';
import { PushRetrieveIndexComponent } from './components/push-retrieve-index/push-retrieve-index.component';
import { PushRetrieveWorkerComponent } from './components/push-retrieve-worker/push-retrieve-worker.component';
import { PushRetrieveServerComponent } from './components/push-retrieve-server/push-retrieve-server.component';
import {AppComponentsModule} from "../../../../components/app-components.module";
import {GeneralUsageModule} from "../../../general-usage/general-usage.module";
import {MatCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
  	PushRetrieveRoutingModule,
	  AppComponentsModule,
	  GeneralUsageModule,
	  //-----------material-------------------
	  MatCardModule,
  ],
  declarations: [PushRetrieveDemoComponent, PushRetrieveIntroComponent, PushRetrieveIndexComponent, PushRetrieveWorkerComponent, PushRetrieveServerComponent]
})
export class PushRetrieveModule { }
