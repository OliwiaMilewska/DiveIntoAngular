import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeItemComponent } from "./recipes/recipes-list/recipe-item/recipe-item.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeStartComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
    // ,exports: [
    //     RecipesComponent,
    //     RecipesListComponent,
    //     RecipesDetailComponent,
    //     RecipeItemComponent,
    //     RecipeEditComponent,
    //     RecipeStartComponent
    // ] No need to export because we use everything inside module or in recipes routing module that is imported here
})
export class RecipesModule { }