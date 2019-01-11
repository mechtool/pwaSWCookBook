import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmbeddedFallbackRoutingModule } from './embedded-fallback-routing.module';
import { EmbeddedFallbackIntroComponent } from './components/embedded-fallback-intro/embedded-fallback-intro.component';
import { EmbeddedFallbackWorkerComponent } from "./components/embedded-fallback-worker/embedded-fallback-worker.component";
import { EmbeddedFallbackDemoComponent } from './components/embedded-fallback-demo/embedded-fallback-demo.component';
import {MatCardModule} from "@angular/material";
import {CacheStrategiesModule} from "../../cache-strategies.module";
import {AppComponentsModule} from "../../../../components/app-components.module";

@NgModule({
  imports: [
    CommonModule,
    EmbeddedFallbackRoutingModule,
	  AppComponentsModule,
	  CacheStrategiesModule,
	  //------------material---------------------
	  MatCardModule,
  ],
  declarations: [
  	EmbeddedFallbackIntroComponent,
	  EmbeddedFallbackDemoComponent,
	  EmbeddedFallbackWorkerComponent,
  ]
})
export class EmbeddedFallbackModule { }
