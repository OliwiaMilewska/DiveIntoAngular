import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredients: Ingredient[] = [];
  ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  startedEditing: Subject<number> = new Subject<number>();

  constructor() { }

  onIngredientAdded(ing: Ingredient): void {
    this.ingredients.push(ing)
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ing: Ingredient[]): void {
    this.ingredients.push(...ing);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
