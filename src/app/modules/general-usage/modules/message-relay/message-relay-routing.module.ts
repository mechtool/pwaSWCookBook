import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageRelayIntroComponent} from "./components/message-relay-intro/message-relay-intro.component";
import {MessageRelayDemoComponent} from "./components/message-relay-demo/message-relay-demo.component";
import {MessageRelayIndexComponent} from "./components/message-relay-index/message-relay-index.component";
import {MessageRelayWorkerComponent} from "./components/message-relay-worker/message-relay-worker.component";

const routes: Routes = [
	{path : 'intro',  component : MessageRelayIntroComponent} ,
	{path : 'demo', outlet : 'aux',  component : MessageRelayDemoComponent},
	{path : 'index', outlet : 'aux',  component : MessageRelayIndexComponent},
	{path : 'worker', outlet : 'aux',  component : MessageRelayWorkerComponent},
	{path : '',  component : MessageRelayIntroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRelayRoutingModule { }
