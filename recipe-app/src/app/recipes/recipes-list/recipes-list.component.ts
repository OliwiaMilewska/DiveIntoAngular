import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(private _recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this._recipeService.getRecipes();
  }
}
