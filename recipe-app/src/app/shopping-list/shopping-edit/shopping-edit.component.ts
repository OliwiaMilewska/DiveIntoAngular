import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private _shopService: ShoppingService) { }

  onClearInput() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = [];
  }

  onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement): void {
    this._shopService.ingredients.push(new Ingredient(name.value, parseInt(amount.value)));
  }
}
