import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CacheOnlyIntroComponent } from "./components/cache-only-intro/cache-only-intro.component";
import { CommonServerComponent } from "../../components/common-server/common-server.component";
import {CacheOnlyDemoComponent} from "./components/cache-only-demo/cache-only-demo.component";
import {CommonIndexComponent} from "../../components/common-index/common-index.component";
import {CacheOnlyWorkerComponent} from "./components/cache-only-worker/cache-only-worker.component";

const routes: Routes = [
    {path : 'intro',  component : CacheOnlyIntroComponent },
	{path : 'index', outlet : 'aux', component : CommonIndexComponent},
	{path : 'demo', outlet : 'aux', component : CacheOnlyDemoComponent },
	{path : 'server', outlet : 'aux', component : CommonServerComponent },
	{path : 'worker', outlet : 'aux', component :  CacheOnlyWorkerComponent},
	{path : '', component : CacheOnlyIntroComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CacheOnlyRoutingModule {}