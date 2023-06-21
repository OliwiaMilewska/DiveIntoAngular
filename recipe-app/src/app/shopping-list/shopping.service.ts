import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredients: Ingredient[] = [];

  constructor() { }

  onIngredientAdded(ing: Ingredient): void {
    this.ingredients.push(ing)
  }

  addIngredients(ing: Ingredient[]): void {
    this.ingredients.push(...ing);
  }
}
