import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement): void {
    this.ingredientAdded.emit(new Ingredient(name.value, parseInt(amount.value)));
  }

  onClearInput() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = [];
  }
}
