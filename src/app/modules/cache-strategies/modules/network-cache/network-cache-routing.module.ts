import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetworkCacheIntroComponent } from "./components/network-cache-intro/network-cache-intro.component";
import { NetworkCacheDemoComponent} from "./components/network-cache-demo/network-cache-demo.component";
import { NetworkCacheIndexComponent } from "./components/network-cache-index/network-cache-index.component";
import {NetworkCacheServiceComponent} from "./components/network-cache-service/network-cache-service.component";
import {NetworkCacheWorkerComponent} from "./components/network-cache-worker/network-cache-worker.component";

const routes: Routes = [
    {path : 'intro', component : NetworkCacheIntroComponent },
    {path : 'demo', outlet : 'aux', component : NetworkCacheDemoComponent },
    {path : 'index', outlet : 'aux', component : NetworkCacheIndexComponent },
    {path : 'service', outlet : 'aux', component : NetworkCacheServiceComponent },
    {path : 'worker', outlet : 'aux', component : NetworkCacheWorkerComponent },
    {path : '', component : NetworkCacheIntroComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NetworkCacheRoutingModule {}