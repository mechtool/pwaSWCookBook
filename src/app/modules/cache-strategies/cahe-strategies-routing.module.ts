import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path : '', children : [
	{path : 'network-cache', loadChildren : './modules/network-cache/network-cache.module#NetworkCacheModule'},
	{path : '' , pathMatch : 'full', redirectTo : '/network-cache'},
    ]}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CacheStrategiesRoutingModule {

}