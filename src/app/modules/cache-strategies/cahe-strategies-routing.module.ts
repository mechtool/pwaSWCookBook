import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CacheStrategiesComponent} from "./cache-strategies.component";

const routes: Routes = [
    {path : '', children : [
		{path : 'network-cache', loadChildren : './modules/network-cache/network-cache.module#NetworkCacheModule'},
		{path : 'cache-only', loadChildren : './modules/cache-only/cache-only.module#CacheOnlyModule'},
		{path : 'cache-update', loadChildren : './modules/cache-update/cache-update.module#CacheUpdateModule'},
		{path : 'cache-update-refresh', loadChildren : './modules/cache-update-refresh/cache-update-refresh.module#CacheUpdateRefreshModule'},
			{path : 'embedded-fallback', loadChildren : './modules/embedded-fallback/embedded-fallback.module#EmbeddedFallbackModule'},
		{path : '',  component : CacheStrategiesComponent}
    ]}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CacheStrategiesRoutingModule {

}