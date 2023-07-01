import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  isAuth: boolean = false;
  constructor(private _dataServ: DataStorageService, private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.sub = this._auth.user.subscribe((user: User) => {
      this.isAuth = !user ? false : true;
    });
  }

  onSaveData(): void {
    this._dataServ.storeRecipes();
  }

  onFetchData(): void {
    this._dataServ.fetchRecipes().subscribe();
  }

  onLogout(): void {
    this._auth.logOut();
    this._router.navigate(['/auth']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
