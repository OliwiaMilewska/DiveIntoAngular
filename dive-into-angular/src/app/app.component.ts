import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserServiceObsService } from './observables/user-obs/user-service-obs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles:[`
  // h3{
  //   color: darkcyan;
  // }
  // `]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'dive-into-angular';
  isNavigationOpen: boolean = false;
  userActivated: boolean = false;
  sub!: Subscription;

  constructor(private _userObsService: UserServiceObsService) { }

  ngOnInit(): void {
    this.sub = this._userObsService.activatedEmitter.subscribe((didActivate: boolean) => this.userActivated = didActivate);
  }

  toggleNavigation(): void {
    this.isNavigationOpen = !this.isNavigationOpen;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
