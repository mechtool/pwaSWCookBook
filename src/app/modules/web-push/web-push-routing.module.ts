import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//------------------components-------------------------
import {WebPushComponent} from "./web-push.component";

const routes: Routes = [
    {path : '', children : [
		{path : 'push-retrieve', loadChildren : './modules/push-retrieve/push-retrieve.module#PushRetrieveModule'},
		{path : '' , component : WebPushComponent },
    ]}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebPushRoutingModule {

}