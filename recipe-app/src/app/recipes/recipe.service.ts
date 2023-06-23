import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1, 'Hamburger', 'Hamburger with great meat.', '../assets/images/hamburger.jpg', [new Ingredient('Meat', 1), new Ingredient('Bread', 2), new Ingredient('Letuce', 1)]),
    new Recipe(2, 'Hamburger v2', 'Hamburger with great meat and more vegetables.', '../assets/images/hamburger.jpg', [new Ingredient('Meat', 1), new Ingredient('Bread', 2), new Ingredient('Letuce', 1), new Ingredient('Tomato', 1), new Ingredient('Onion', 1)])
  ];
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private _shopService: ShoppingService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.slice().find((r: Recipe) => r.id === id);
  }

  addIngredientsToShopList(ingredients: Ingredient[]) {
    this._shopService.addIngredients(ingredients);
  }
}
