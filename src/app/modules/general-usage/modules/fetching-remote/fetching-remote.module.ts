import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetchingRemoteRoutingModule } from './fetching-remote-routing.module';
import { FetchingRemoteIntroComponent } from './components/fetching-remote-intro/fetching-remote-intro.component';
import { FetchingRemoteDemoComponent } from './components/fetching-remote-demo/fetching-remote-demo.component';
import {AppComponentsModule} from "../../../../components/app-components.module";
import {GeneralUsageModule} from "../../general-usage.module";
import {MatCardModule} from "@angular/material";
import { FetchingRemoteIndexComponent } from './components/fetching-remote-index/fetching-remote-index.component';
import { FetchingRemoteWorkerComponent } from './components/fetching-remote-worker/fetching-remote-worker.component';

@NgModule({
  imports: [
    CommonModule,
	  AppComponentsModule,
	  GeneralUsageModule,
    FetchingRemoteRoutingModule,
  //-----------material-------------------
	  MatCardModule,
  ],
  declarations: [
  	FetchingRemoteIntroComponent,
	  FetchingRemoteDemoComponent,
	  FetchingRemoteIndexComponent,
	  FetchingRemoteWorkerComponent
  ]
})
export class FetchingRemoteModule { }
