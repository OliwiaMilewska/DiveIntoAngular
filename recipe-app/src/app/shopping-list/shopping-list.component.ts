import { Component } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',3),
    new Ingredient('Tomatoes',5),
    new Ingredient('Onion',1),
  ];

  onIngredientAdded(ing: Ingredient): void{
    this.ingredients.push(ing)
  }
}
