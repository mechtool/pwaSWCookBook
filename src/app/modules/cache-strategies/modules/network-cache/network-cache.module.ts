import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponentsModule } from "../../../../components/app-components.module";
import { CacheStrategiesModule } from "../../cache-strategies.module";

import { NetworkCacheRoutingModule } from "./network-cache-routing.module";
//-------------components----------------------------------------------------
import { NetworkCacheIntroComponent } from './components/network-cache-intro/network-cache-intro.component';
import { NetworkCacheDemoComponent } from './components/network-cache-demo/network-cache-demo.component';
import { NetworkCacheWorkerComponent } from './components/network-cache-worker/network-cache-worker.component';

//------------------locales-----------------------------------------

//-----------------material-----------------------------------------
import {MatCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    NetworkCacheRoutingModule,
      AppComponentsModule,
	  CacheStrategiesModule,
      //------------material---------------------
      MatCardModule,
  ],
  declarations: [
      NetworkCacheIntroComponent,
      NetworkCacheDemoComponent,
      NetworkCacheWorkerComponent,
  ]
})
export class NetworkCacheModule {}