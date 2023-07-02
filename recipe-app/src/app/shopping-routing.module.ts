import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ShoppingRoutingModule { }
