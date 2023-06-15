import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiveIntoComponentsComponent } from './dive-into-components/dive-into-components.component';
import { BasicsComponent } from './basics/basics.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'diveintocomponents', component: DiveIntoComponentsComponent },
  { path: 'basics', component: BasicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
