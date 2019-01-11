import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetworkCacheIntroComponent } from "./components/network-cache-intro/network-cache-intro.component";
import { NetworkCacheDemoComponent} from "./components/network-cache-demo/network-cache-demo.component";
import {NetworkCacheWorkerComponent} from "./components/network-cache-worker/network-cache-worker.component";
import { CommonServerComponent } from "../../components/common-server/common-server.component";
import {CommonIndexComponent} from "../../components/common-index/common-index.component";

const routes: Routes = [
    {path : 'intro', component : NetworkCacheIntroComponent },
	{path : 'demo', outlet : 'aux', component : NetworkCacheDemoComponent },
    {path : 'index', outlet : 'aux', component : CommonIndexComponent},
    {path : 'server', outlet : 'aux', component : CommonServerComponent },
    {path : 'worker', outlet : 'aux', component : NetworkCacheWorkerComponent },
    {path : '', component : NetworkCacheIntroComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NetworkCacheRoutingModule {}