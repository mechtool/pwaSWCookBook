import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponentsModule } from "../../../../components/app-components.module";

import { NetworkCacheRoutingModule } from "./network-cache-routing.module";
//-------------components----------------------------------------------------
import { CommonDemoComponent } from "../../components/common-demo/common-demo.component";
import { NetworkCacheIntroComponent } from './components/network-cache-intro/network-cache-intro.component';
import { NetworkCacheDemoComponent } from './components/network-cache-demo/network-cache-demo.component';
import { NetworkCacheIndexComponent } from './components/network-cache-index/network-cache-index.component';
import { NetworkCacheServiceComponent } from './components/network-cache-service/network-cache-service.component';
import { NetworkCacheWorkerComponent } from './components/network-cache-worker/network-cache-worker.component';

//------------------locales-----------------------------------------

//-----------------material-----------------------------------------
import {MatButtonModule, MatCardModule, MatToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    NetworkCacheRoutingModule,
      AppComponentsModule,
      //------------material---------------------
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
  ],
  declarations: [
      NetworkCacheIntroComponent,
      NetworkCacheDemoComponent,
      NetworkCacheIndexComponent,
      NetworkCacheServiceComponent,
      NetworkCacheWorkerComponent,
      CommonDemoComponent,
  ]
})
export class NetworkCacheModule {}