import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FetchingRemoteIntroComponent} from "./components/fetching-remote-intro/fetching-remote-intro.component";
import {FetchingRemoteDemoComponent} from "./components/fetching-remote-demo/fetching-remote-demo.component";
import {FetchingRemoteIndexComponent} from "./components/fetching-remote-index/fetching-remote-index.component";
import {FetchingRemoteWorkerComponent} from "./components/fetching-remote-worker/fetching-remote-worker.component";

const routes: Routes = [
	{path : 'intro',  component : FetchingRemoteIntroComponent},
	{path : 'index', outlet : 'aux', component : FetchingRemoteIndexComponent},
	{path : 'worker', outlet : 'aux', component : FetchingRemoteWorkerComponent},
	{path : 'demo', outlet : 'aux',  component : FetchingRemoteDemoComponent },
	{path : '', component : FetchingRemoteIntroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FetchingRemoteRoutingModule { }
