import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GeneralUsageComponent} from "./general-usage.component";

const routes: Routes = [
	{path : '', children : [
		{path : 'immediate-claim', loadChildren : './modules/immediate-claim/immediate-claim.module#ImmediateClaimModule'},
		{path : 'message-relay', loadChildren : './modules/message-relay/message-relay.module#MessageRelayModule'},
		{path : 'fetching-remote', loadChildren : './modules/fetching-remote/fetching-remote.module#FetchingRemoteModule'},
		{path : '' , component : GeneralUsageComponent},
		]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralUsageRoutingModule { }
