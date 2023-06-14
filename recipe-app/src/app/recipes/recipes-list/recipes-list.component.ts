import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('Hamburger','Hamburger with great meat.','../assets/images/hamburger.jpg'),
    new Recipe('Hamburger','Hamburger with great meat.','../assets/images/hamburger.jpg')
  ];
}
