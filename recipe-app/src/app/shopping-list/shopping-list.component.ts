import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../shared/services/logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  sub!: Subscription;

  constructor(private _shopService: ShoppingService, private _log: LoggingService) { }

  ngOnInit(): void {
    this.ingredients = this._shopService.ingredients;
    this.sub = this._shopService.ingredientsChanged.subscribe((ing: Ingredient[]) => this.ingredients = ing);
    this._log.printLog('Hello form ShoppingComponent!');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onEditItem(index: number): void {
    this._shopService.startedEditing.next(index);
  }
}
