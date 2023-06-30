import { Component } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _dataServ: DataStorageService) { }

  onSaveData(): void {
    this._dataServ.storeRecipes();
  }

  onFetchData(): void {
    this._dataServ.fetchRecipes().subscribe();
  }
}
