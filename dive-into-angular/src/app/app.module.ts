import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './basics/server/server.component';
import { ServersComponent } from './basics/servers/servers.component';
import { WarningAlertComponent } from './basics/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './basics/success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { DiveIntoComponentsComponent } from './dive-into-components/dive-into-components.component';
import { BasicsComponent } from './basics/basics.component';
import { CockpitComponent } from './dive-into-components/cockpit/cockpit.component';
import { ServerElementComponent } from './dive-into-components/server-element/server-element.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DiveIntoComponentsComponent,
    BasicsComponent,
    CockpitComponent,
    ServerElementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
