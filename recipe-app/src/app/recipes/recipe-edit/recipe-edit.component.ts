import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from '../recipe.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe!: Recipe;
  editMode: boolean = false;
  recipeForm!: FormGroup;
  id: number;

  constructor(private _route: ActivatedRoute, private _router: Router, private _recServcie: RecipeService, private _recipeService: RecipeService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeId = this._recServcie.getRecipes().length + 1;
    let recipeName = '';
    let recipeImagePath = '../assets/images/pasta.jpg';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this._recServcie.getRecipe(this.id);
      recipeId = recipe.id;
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'id': new FormControl(recipeId, Validators.required),
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  AddIngredient(): void {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
    }));
  }

  onSubmit(): void {
    // let newRecipe = new Recipe(this.recipeForm.value['name'], this.recipeForm.value['name'], this.recipeForm.value['description'], this.recipeForm.value['image'], this.recipeForm.value['ingredients']);

    if (this.editMode) {
      this._recServcie.updateRecipe(this.id, this.recipeForm.value);
    }
    else {
      this._recipeService.addRecipe(this.recipeForm.value);
    }
    this._router.navigate(['/recipes', this.recipeForm.value.id], { relativeTo: this._route });
  }

  onCancel(): void {
    this._router.navigate(['/recipes'], { relativeTo: this._route });
  }

  onDeleteIngredient(index: number): void {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
