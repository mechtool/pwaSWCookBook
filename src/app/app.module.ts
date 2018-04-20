import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";

import { AppComponentsModule } from "./components/app-components.module";
//-----------------services------------------------------
import { CommunicateService } from "./services/app-service.service";
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//------------------------material---------------------
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material";

import 'hammerjs';
//----------------------------------------------------------
import { environment } from '../environments/environment';
import { IntroductionComponent } from './components/introduction/intro/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppComponentsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }) ,
    //------------------------material---------------------------------
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [
      CommunicateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
