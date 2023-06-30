import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "../shared/models/recipe.model";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/services/data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private _dataService: DataStorageService, private _recipesService: RecipeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        let recipes = this._recipesService.getRecipes();
        if (recipes.length === 0)
            return this._dataService.fetchRecipes();
        else
            return recipes;
    }

}