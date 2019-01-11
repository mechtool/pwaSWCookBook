import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CommonIndexComponent} from "../../components/common-index/common-index.component";
import {CommonServerComponent} from "../../components/common-server/common-server.component";

import { CacheUpdateRefreshIntroComponent } from "./components/cache-update-refresh-intro/cache-update-refresh-intro.component";
import {CacheUpdateRefreshDemoComponent} from "./components/cache-update-refresh-demo/cache-update-refresh-demo.component";
import {CacheUpdateRefreshWorkerComponent} from "./components/cache-update-refresh-worker/cache-update-refresh-worker.component";

const routes: Routes = [
	{path : 'index', outlet : 'aux', component : CommonIndexComponent},
	{path : 'server', outlet : 'aux', component : CommonServerComponent },
	{path : 'intro', component : CacheUpdateRefreshIntroComponent },
	{path : 'demo', outlet : 'aux', component : CacheUpdateRefreshDemoComponent },
	{path : 'worker', outlet : 'aux', component : CacheUpdateRefreshWorkerComponent },
	{path : '', component : CacheUpdateRefreshIntroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CacheUpdateRefreshRoutingModule { }
