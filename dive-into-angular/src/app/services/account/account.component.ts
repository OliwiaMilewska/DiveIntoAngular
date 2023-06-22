import { Component, Input } from '@angular/core';
import { AccountsService } from 'src/app/shared/accounts.service';
import { LoggingService } from 'src/app/shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account!: { name: string, status: string };
  @Input() id!: number;

  constructor(private _logging: LoggingService, private _accService: AccountsService) { }

  onSetTo(status: string): void {
    this._accService.updateStatus(this.id, status);
    this._logging.logStatusChange(status);
  }
}
