import { Component, Input } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users!: string[];

  constructor(private _userService: UsersService) { }

  onSetToActive(id: number): void {
    this._userService.onSetToActive(id);
  }
}
