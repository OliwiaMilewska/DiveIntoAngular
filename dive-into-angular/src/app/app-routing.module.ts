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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'diveintocomponents', component: DiveIntoComponentsComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'gameBinding', component: GameComponent },
  { path: 'directives', component: DirectivePageComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'homerouting', component: HomeRoutingComponent },
  { path: 'serversrouting', component: ServersRoutingComponent },
  { path: 'usersrouting', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
