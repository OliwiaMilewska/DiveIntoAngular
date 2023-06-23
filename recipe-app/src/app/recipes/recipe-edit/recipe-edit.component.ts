import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  recipe!: Recipe;
  editMode: boolean = false;

  constructor(private _route: ActivatedRoute, private _recServcie: RecipeService){}

  ngOnInit(): void {
   this._route.params.subscribe((params: Params) => {
    this.recipe = this._recServcie.getRecipe(parseInt(params['id']))
    this.editMode = params['id'] !== null ? true : false;
   });
  }
}
