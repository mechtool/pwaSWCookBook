import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmbeddedFallbackIntroComponent} from "./components/embedded-fallback-intro/embedded-fallback-intro.component";
import {EmbeddedFallbackDemoComponent} from "./components/embedded-fallback-demo/embedded-fallback-demo.component";
import {CommonIndexComponent} from "../../components/common-index/common-index.component";
import {CommonServerComponent} from "../../components/common-server/common-server.component";
import {EmbeddedFallbackWorkerComponent} from "./components/embedded-fallback-worker/embedded-fallback-worker.component";


const routes: Routes = [
	{path : 'intro', component :  EmbeddedFallbackIntroComponent},
	{path : 'demo', outlet : 'aux', component : EmbeddedFallbackDemoComponent },
	{path : 'index', outlet : 'aux', component : CommonIndexComponent},
	{path : 'server', outlet : 'aux', component : CommonServerComponent },
	{path : 'worker', outlet : 'aux', component :  EmbeddedFallbackWorkerComponent},
	{path : '', component : EmbeddedFallbackIntroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbeddedFallbackRoutingModule { }
