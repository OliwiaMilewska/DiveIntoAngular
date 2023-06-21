import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent {
  @Input() recipe: Recipe;

  constructor(private _recipeService: RecipeService) { }

  onAddToShopList(): void {
    this._recipeService.addIngredientsToShopList(this.recipe.ingredients);
  }
}
