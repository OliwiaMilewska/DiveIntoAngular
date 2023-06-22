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
    path: 'serversrouting', component: ServersRoutingComponent, children: [
      { path: ':id', component: ServerRoutingComponent },
      { path: ':id/edit', component: EditServerRoutingComponent },
    ]
  },
  {
    path: 'usersrouting', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
