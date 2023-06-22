import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private _logging: LoggingService) { }

  addAccount(name: string, status: string): void {
    this.accounts.push({ name, status });
    this._logging.logStatusChange("(From another service) " + status);
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this._logging.logStatusChange("(From another service) " + newStatus);
  }
}