import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiveIntoComponentsComponent } from './dive-into-components/dive-into-components.component';
import { BasicsComponent } from './basics/basics.component';

const routes: Routes = [
  {path: 'diveintocomponents', component: DiveIntoComponentsComponent},
  {path: 'basics', component: BasicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
