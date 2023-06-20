import { Component } from '@angular/core';
import { AccountsService } from 'src/app/shared/accounts.service';
import { LoggingService } from 'src/app/shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(private _logging: LoggingService, private _accServcie: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this._accServcie.addAccount(accountName, accountStatus);
    this._logging.logStatusChange(accountStatus); 
  }
}
