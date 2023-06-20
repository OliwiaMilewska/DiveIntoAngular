import { Component, Input } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users!: string[];

  constructor(private _userService: UsersService) { }

  onSetToInactive(id: number): void {
    this._userService.onSetToInactive(id);
  }
}
