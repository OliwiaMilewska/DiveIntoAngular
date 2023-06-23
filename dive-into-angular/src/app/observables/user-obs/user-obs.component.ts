import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserServiceObsService } from './user-service-obs.service';

@Component({
  selector: 'app-user-obs',
  templateUrl: './user-obs.component.html',
  styleUrls: ['./user-obs.component.css']
})
export class UserObsComponent implements OnInit {
  id!: number;
  state: boolean = false;

  constructor(private _route: ActivatedRoute, private _userService: UserServiceObsService) {
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  OnActivate(): void {
    this.state = !this.state;
    this._userService.activatedEmitter.next(this.state);
  }
}
