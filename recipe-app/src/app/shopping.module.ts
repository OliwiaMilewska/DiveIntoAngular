import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingRoutingModule } from "./shopping-routing.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ShoppingRoutingModule
    ]
})
export class ShoppingModule { }