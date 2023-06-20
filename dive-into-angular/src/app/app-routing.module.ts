import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiveIntoComponentsComponent } from './dive-into-components/dive-into-components.component';
import { BasicsComponent } from './basics/basics.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './ex-binding/game/game.component';
import { DirectivePageComponent } from './directives/directive-page/directive-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'diveintocomponents', component: DiveIntoComponentsComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'gameBinding', component: GameComponent },
  { path: 'directives', component: DirectivePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
