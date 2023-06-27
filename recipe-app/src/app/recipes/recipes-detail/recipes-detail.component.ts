import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private _recipeService: RecipeService, private _route: ActivatedRoute, private _router: Router) { }

  onAddToShopList(): void {
    this._recipeService.addIngredientsToShopList(this.recipe.ingredients);
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => this.recipe = this._recipeService.getRecipe(parseInt(params['id'])));
  }

  onDeleteRecipe() {
    this._recipeService.deleteRecipe(this.recipe.id);
    this._router.navigate(['/recipes'], { relativeTo: this._route });
  }
}
