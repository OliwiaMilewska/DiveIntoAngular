import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user!: { id: number, name: string };
  paramsSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user = {
        id: params['id'],
        name: params['name']
      };
    });
  }

  onLoad() {
    this.router.navigate(['/userrouting/10/Anna']);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
