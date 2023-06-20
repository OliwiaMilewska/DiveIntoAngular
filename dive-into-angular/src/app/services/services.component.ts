import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];

  constructor(private _accServcie: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this._accServcie.accounts;
  }
}
