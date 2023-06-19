import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Hamburger', 'Hamburger with great meat.', '../assets/images/hamburger.jpg'),
    new Recipe('Hamburger v2', 'Hamburger with great meat and more vegetables.', '../assets/images/hamburger.jpg')
  ];

  onRecepieSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
