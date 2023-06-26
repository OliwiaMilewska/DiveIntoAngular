import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './basics/server/server.component';
import { ServersComponent } from './basics/servers/servers.component';
import { WarningAlertComponent } from './basics/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './basics/success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ActiveUsersComponent } from './services/active-users/active-users.component';
import { InactiveUsersComponent } from './services/inactive-users/inactive-users.component';
import { UsersComponent } from './routing/users/users.component';
import { EditServerRoutingComponent } from './routing/servers-routing/edit-server-routing/edit-server-routing.component';
import { ServersRoutingComponent } from './routing/servers-routing/servers-routing.component';
import { ServerRoutingComponent } from './routing/servers-routing/server-routing/server-routing.component';
import { HomeRoutingComponent } from './routing/home-routing/home-routing.component';
import { UserComponent } from './routing/users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeObsComponent } from './observables/home-obs/home-obs.component';
import { UserObsComponent } from './observables/user-obs/user-obs.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { AssigmentTemplateDrivenComponent } from './forms/template-driven/assigment-template-driven/assigment-template-driven.component';
import { AssigmentReactiveComponent } from './forms/reactive/assigment-reactive/assigment-reactive.component';

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
    ServicesComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    UsersComponent,
    EditServerRoutingComponent,
    ServersRoutingComponent,
    ServerRoutingComponent,
    HomeRoutingComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    HomeObsComponent,
    UserObsComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    AssigmentTemplateDrivenComponent,
    AssigmentReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
