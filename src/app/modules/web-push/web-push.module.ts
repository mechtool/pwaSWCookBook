import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPushRoutingModule } from "./web-push-routing.module";
import { WebPushComponent } from './web-push.component';
import {AppComponentsModule} from "../../components/app-components.module";
import {MatCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    WebPushRoutingModule,
	  AppComponentsModule,
	  //----------------material-------------------
	  MatCardModule
  ],
  declarations: [
  	WebPushComponent
  ]
})
export class WebPushModule { }
