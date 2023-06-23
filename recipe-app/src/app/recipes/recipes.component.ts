import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private _recipeService: RecipeService) { }

  ngOnInit(): void {
    this._recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

}
