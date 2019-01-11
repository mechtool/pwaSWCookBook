import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CacheUpdateIntroComponent } from "./components/cache-update-intro/cache-update-intro.component";
import { CommonServerComponent } from "../../components/common-server/common-server.component";
import {CacheUpdateDemoComponent} from "./components/cache-update-demo/cache-update-demo.component";
import {CommonIndexComponent} from "../../components/common-index/common-index.component";
import {CacheUpdateWorkerComponent} from "./components/cache-update-worker/cache-update-worker.component";

const routes: Routes = [
    {path : 'intro',  component : CacheUpdateIntroComponent },
	{path : 'index', outlet : 'aux', component : CommonIndexComponent},
	{path : 'demo', outlet : 'aux', component : CacheUpdateDemoComponent },
	{path : 'server', outlet : 'aux', component : CommonServerComponent },
	{path : 'worker', outlet : 'aux', component :  CacheUpdateWorkerComponent},
	{path : '', component : CacheUpdateIntroComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CacheUpdateRoutingModule {}