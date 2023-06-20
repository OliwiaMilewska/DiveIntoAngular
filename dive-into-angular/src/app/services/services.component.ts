import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private _accServcie: AccountsService, private _userService: UsersService) { }

  ngOnInit(): void {
    this.accounts = this._accServcie.accounts;
    this.activeUsers = this._userService.activeUsers;
    this.inactiveUsers = this._userService.inactiveUsers;
  }
}
