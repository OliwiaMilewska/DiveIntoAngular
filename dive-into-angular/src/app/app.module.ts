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
import { GameControlComponent } from './ex-binding/game-control/game-control.component';
import { OddComponent } from './ex-binding/odd/odd.component';
import { EvenComponent } from './ex-binding/even/even.component';
import { GameComponent } from './ex-binding/game/game.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { DirectivePageComponent } from './directives/directive-page/directive-page.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { ServicesComponent } from './services/services.component';
import { AccountsService } from './shared/accounts.service';
import { LoggingService } from './shared/logging.service';

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
    HomeComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    GameComponent,
    BasicHighlightDirective,
    DirectivePageComponent,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    ServicesComponent
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
