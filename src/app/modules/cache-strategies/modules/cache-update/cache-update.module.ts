import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponentsModule } from "../../../../components/app-components.module";
import { CacheStrategiesModule } from "../../cache-strategies.module";

import { CacheUpdateRoutingModule } from "./cache-update-routing.module";
//-----------------material-----------------------------------------
import {MatCardModule} from "@angular/material";
//-------------components----------------------------------------------------
import { CacheUpdateIntroComponent } from './components/cache-update-intro/cache-update-intro.component';
import { CacheUpdateDemoComponent } from './components/cache-update-demo/cache-update-demo.component';
import { CacheUpdateWorkerComponent } from "./components/cache-update-worker/cache-update-worker.component";

//------------------locales-----------------------------------------

@NgModule({
  imports: [
	CommonModule,
	CacheStrategiesModule,
	CacheUpdateRoutingModule,
	AppComponentsModule,
	//------------material---------------------
	MatCardModule,
  ],
  declarations: [
	  CacheUpdateIntroComponent,
	  CacheUpdateDemoComponent,
	  CacheUpdateWorkerComponent,
  ]
})
export class CacheUpdateModule {}