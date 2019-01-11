import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImmediateClaimIntroComponent} from "./components/immediate-claim-intro/immediate-claim-intro.component";
import {ImmediateClaimDemoComponent} from "./components/immediate-claim-demo/immediate-claim-demo.component";

const routes: Routes = [
	{path : 'intro',  component : ImmediateClaimIntroComponent},
	{path : 'demo', outlet : 'aux', component : ImmediateClaimDemoComponent} ,
	{path : '',  component : ImmediateClaimIntroComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImmediateClaimRoutingModule { }
