import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes!: Recipe[];
  sub: Subscription;

  constructor(private _recipeService: RecipeService) { }

  ngOnInit(): void {
    this.sub = this._recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
    this.recipes = this._recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
