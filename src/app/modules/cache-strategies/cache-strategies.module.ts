//--------------modules----------------------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponentsModule } from "../../components/app-components.module";
import { CacheStrategiesRoutingModule } from "./cahe-strategies-routing.module";
//-----------------components----------------------------------
import { CacheStrategiesComponent } from './cache-strategies.component';
import { CommonServerComponent } from "./components/common-server/common-server.component";
import { CommonIndexComponent } from "./components/common-index/common-index.component";

//----------------material----------------------------------------------
import {MatButtonModule, MatCardModule} from "@angular/material";
import {CommonDemoComponent} from "./components/common-demo/common-demo.component";

@NgModule({
	imports: [
		CommonModule,
		AppComponentsModule,
		CacheStrategiesRoutingModule,
		//--------------material-------------------------
		MatCardModule,
		MatButtonModule,
	],
  declarations: [
		CacheStrategiesComponent,
		CommonDemoComponent,
		CommonServerComponent,
		CommonIndexComponent,
  ],
	exports : [
		CacheStrategiesComponent,
		CommonDemoComponent,
		CommonServerComponent,
		CommonIndexComponent,
	]
})
export class CacheStrategiesModule{ }
