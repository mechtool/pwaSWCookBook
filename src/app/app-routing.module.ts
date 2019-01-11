import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from "./components/introduction/intro/introduction.component";

const routes: Routes = [
    {path : 'introduction', children : [
	    {path : 'intro', component : IntroductionComponent},
	    {path : '' , pathMatch : 'full', redirectTo : '/introduction/intro'},
	]},
    {path : 'caching-strategies', loadChildren : './modules/cache-strategies/cache-strategies.module#CacheStrategiesModule'} ,
	{path : 'web-push', loadChildren : './modules/web-push/web-push.module#WebPushModule'} ,
	{path : 'general-usage', loadChildren : './modules/general-usage/general-usage.module#GeneralUsageModule'} ,
	{path : '' , pathMatch : 'full', redirectTo : '/introduction/intro'},
    {path : '**', pathMatch : 'full', redirectTo : '/introduction/intro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
