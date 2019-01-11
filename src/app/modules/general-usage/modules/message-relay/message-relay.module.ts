import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRelayRoutingModule } from './message-relay-routing.module';
import { MessageRelayIntroComponent } from './components/message-relay-intro/message-relay-intro.component';
import { MessageRelayDemoComponent } from './components/message-relay-demo/message-relay-demo.component';
import {AppComponentsModule} from "../../../../components/app-components.module";
import {MatCardModule} from "@angular/material";
import {GeneralUsageModule} from "../../general-usage.module";
import { MessageRelayIndexComponent } from './components/message-relay-index/message-relay-index.component';
import { MessageRelayWorkerComponent } from './components/message-relay-worker/message-relay-worker.component';

@NgModule({
  imports: [
	CommonModule,
	AppComponentsModule,
	GeneralUsageModule,
    MessageRelayRoutingModule
	,//-----------material-------------------
	MatCardModule,
  ],
  declarations: [
	MessageRelayIntroComponent,
	MessageRelayDemoComponent,
	MessageRelayIndexComponent,
	MessageRelayWorkerComponent,
  ]
})
export class MessageRelayModule { }
