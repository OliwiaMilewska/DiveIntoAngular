import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiveIntoComponentsComponent } from './dive-into-components/dive-into-components.component';
import { BasicsComponent } from './basics/basics.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './ex-binding/game/game.component';
import { DirectivePageComponent } from './directives/directive-page/directive-page.component';
import { ServicesComponent } from './services/services.component';
import { HomeRoutingComponent } from './routing/home-routing/home-routing.component';
import { UsersComponent } from './routing/users/users.component';
import { ServersRoutingComponent } from './routing/servers-routing/servers-routing.component';
import { UserComponent } from './routing/users/user/user.component';
import { EditServerRoutingComponent } from './routing/servers-routing/edit-server-routing/edit-server-routing.component';
import { ServerRoutingComponent } from './routing/servers-routing/server-routing/server-routing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './routing/servers-routing/edit-server-routing/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './routing/servers-routing/server-routing/server-resolver.service';
import { HomeObsComponent } from './observables/home-obs/home-obs.component';
import { UserObsComponent } from './observables/user-obs/user-obs.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { AssigmentTemplateDrivenComponent } from './forms/template-driven/assigment-template-driven/assigment-template-driven.component';
import { AssigmentReactiveComponent } from './forms/reactive/assigment-reactive/assigment-reactive.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'diveintocomponents', component: DiveIntoComponentsComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'gameBinding', component: GameComponent },
  { path: 'directives', component: DirectivePageComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'homerouting', component: HomeRoutingComponent },
  {
    path: 'serversrouting',/*canActivate:[AuthGuard]*/ canActivateChild: [AuthGuard], component: ServersRoutingComponent, children: [
      { path: ':id', component: ServerRoutingComponent, resolve: { server: ServerResolver } },
      { path: ':id/edit', component: EditServerRoutingComponent, canDeactivate: [CanDeactivateGuard] },
    ]
  },
  {
    path: 'usersrouting', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  { path: 'homeobs', component: HomeObsComponent },
  { path: 'userobs/:id', component: UserObsComponent },
  { path: 'forms/template-driven', component: TemplateDrivenComponent },
  { path: 'forms/reactive', component: ReactiveComponent },
  { path: 'forms/template-driven/assigment', component: AssigmentTemplateDrivenComponent },
  { path: 'forms/reactive/assigment', component: AssigmentReactiveComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'error-page', component: ErrorPageComponent, data: { message: "Error, page was not found!" } },
  { path: '**', redirectTo: '/error-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
