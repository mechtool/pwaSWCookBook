import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponentsModule } from "../../../../components/app-components.module";
import { CacheStrategiesModule } from "../../cache-strategies.module";

import { CacheOnlyRoutingModule } from "./cache-only-routing.module";
//-----------------material-----------------------------------------
import {MatCardModule} from "@angular/material";
//-------------components----------------------------------------------------
import { CacheOnlyIntroComponent } from './components/cache-only-intro/cache-only-intro.component';
import { CacheOnlyDemoComponent } from './components/cache-only-demo/cache-only-demo.component';
import { CacheOnlyWorkerComponent } from "./components/cache-only-worker/cache-only-worker.component";

//------------------locales-----------------------------------------

@NgModule({
  imports: [
	CommonModule,
	CacheStrategiesModule,
	CacheOnlyRoutingModule,
	AppComponentsModule,
	//------------material---------------------
	MatCardModule,
  ],
  declarations: [
	  CacheOnlyIntroComponent,
	  CacheOnlyDemoComponent,
	  CacheOnlyWorkerComponent,
  ]
})
export class CacheOnlyModule {}