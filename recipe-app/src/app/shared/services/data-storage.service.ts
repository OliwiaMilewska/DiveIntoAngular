import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  url: string = 'https://diveintoangular-default-rtdb.firebaseio.com/';

  constructor(private _http: HttpClient, private _recipesServ: RecipeService) { }

  storeRecipes(): void {
    let recipes = this._recipesServ.getRecipes();
    this._http.put<Recipe[]>(this.url + 'recipes.json', recipes).subscribe();
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this._http.get<Recipe[]>(this.url + 'recipes.json')
      .pipe(map((recipes: Recipe[]) => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        });
      }), tap((recipes: Recipe[]) => {
        this._recipesServ.setRecipes(recipes);
      }));
  }
}
