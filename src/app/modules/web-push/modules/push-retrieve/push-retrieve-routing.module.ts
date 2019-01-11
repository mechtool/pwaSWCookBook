import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PushRetrieveIntroComponent} from "./components/push-retrieve-intro/push-retrieve-intro.component";
import {PushRetrieveIndexComponent} from "./components/push-retrieve-index/push-retrieve-index.component";
import {PushRetrieveDemoComponent} from "./components/push-retrieve-demo/push-retrieve-demo.component";
import {PushRetrieveWorkerComponent} from "./components/push-retrieve-worker/push-retrieve-worker.component";
import {PushRetrieveServerComponent} from "./components/push-retrieve-server/push-retrieve-server.component";

const routes: Routes = [
	{path : 'intro', component : PushRetrieveIntroComponent},
	{path : 'index', outlet : 'aux', component : PushRetrieveIndexComponent},
	{path : 'demo', outlet : 'aux', component : PushRetrieveDemoComponent},
	{path : 'worker', outlet : 'aux', component : PushRetrieveWorkerComponent},
	{path : 'server', outlet : 'aux', component : PushRetrieveServerComponent},
	{path : '', component : PushRetrieveIntroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PushRetrieveRoutingModule { }
