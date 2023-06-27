import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  sub!: Subscription;

  constructor(private _shopService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this._shopService.ingredients;
    this.sub = this._shopService.ingredientsChanged.subscribe((ing: Ingredient[]) => this.ingredients = ing);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onEditItem(index: number): void{
    this._shopService.startedEditing.next(index);
  }
}
