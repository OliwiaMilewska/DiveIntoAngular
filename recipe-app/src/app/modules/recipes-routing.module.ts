import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeEditComponent } from "../recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "../recipes/recipe-start/recipe-start.component";
import { RecipesDetailComponent } from "../recipes/recipes-detail/recipes-detail.component";
import { RecipesResolverService } from "../recipes/recipes-resolver.service";
import { RecipesComponent } from "../recipes/recipes.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '', component: RecipesComponent, canActivate: [AuthGuard], children: [
            { path: '', component: RecipeStartComponent, resolve: [RecipesResolverService] },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipesDetailComponent, resolve: [RecipesResolverService] },
            { path: 'edit/:id', component: RecipeEditComponent, resolve: [RecipesResolverService] }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }