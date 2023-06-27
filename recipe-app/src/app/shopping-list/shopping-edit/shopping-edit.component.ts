import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private _shopService: ShoppingService) { }

  ngOnInit(): void {
    this.subscription = this._shopService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this._shopService.getIngredient(index);

      this.shoppingForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onSubmit(form: NgForm): void {
    if (this.editMode) {
      this._shopService.ingredients[this.editedItemIndex] = new Ingredient(form.value.name, parseInt(form.value.amount));
      this.editMode = false;
    }
    else
      this._shopService.ingredients.push(new Ingredient(form.value.name, parseInt(form.value.amount)));

    this.shoppingForm.reset();
  }

  onDelete(): void {
    this.onClearInput();
    this._shopService.deleteIngredient(this.editedItemIndex);
  }

  onClearInput() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
