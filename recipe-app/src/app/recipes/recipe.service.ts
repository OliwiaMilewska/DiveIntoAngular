import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(1, 'Hamburger', 'Hamburger with great meat.', '../assets/images/hamburger.jpg', [new Ingredient('Meat', 1), new Ingredient('Bread', 2), new Ingredient('Letuce', 1)]),
  //   new Recipe(2, 'Hamburger v2', 'Hamburger with great meat and more vegetables.', '../assets/images/hamburger.jpg', [new Ingredient('Meat', 1), new Ingredient('Bread', 2), new Ingredient('Letuce', 1), new Ingredient('Tomato', 1), new Ingredient('Onion', 1)])
  // ];
  private recipes: Recipe[] = [];

  constructor(private _shopService: ShoppingService) { }

  getRecipes(): Recipe[] {
    this.recipesChanged.next(this.recipes.slice());
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.slice().find((r: Recipe) => r.id === id);
  }

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShopList(ingredients: Ingredient[]) {
    this._shopService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    const recipeIndex = this.recipes.findIndex(item => item.id === index);
    if (recipeIndex !== -1) {
      this.recipes[recipeIndex] = newRecipe;
    }
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    let i = this.recipes.findIndex(x => x.id == index);
    this.recipes.splice(i, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
