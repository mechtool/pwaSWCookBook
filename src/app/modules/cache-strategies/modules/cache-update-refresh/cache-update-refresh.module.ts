import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponentsModule } from "../../../../components/app-components.module";
import { CacheStrategiesModule } from "../../cache-strategies.module";
import { CacheUpdateRefreshRoutingModule } from './cache-update-refresh-routing.module';


import { CacheUpdateRefreshIntroComponent } from './components/cache-update-refresh-intro/cache-update-refresh-intro.component';
import { CacheUpdateRefreshDemoComponent } from "./components/cache-update-refresh-demo/cache-update-refresh-demo.component";
 import { CacheUpdateRefreshWorkerComponent } from "./components/cache-update-refresh-worker/cache-update-refresh-worker.component";
//-----------------material-----------------------------------------
import {MatCardModule} from "@angular/material";

@NgModule({
  imports: [
	CommonModule,
	AppComponentsModule,
	CacheStrategiesModule,
	CacheUpdateRefreshRoutingModule,
	  //-----------material----------------
	  MatCardModule,
  ],
  declarations: [
	CacheUpdateRefreshIntroComponent,
	CacheUpdateRefreshDemoComponent,
	  CacheUpdateRefreshWorkerComponent,
  ]
})
export class CacheUpdateRefreshModule { }
