import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-routing',
  templateUrl: './home-routing.component.html',
  styleUrls: ['./home-routing.component.css']
})
export class HomeRoutingComponent {

  constructor(private router: Router) { }

  onLoadServers(id: number): void {
    this.router.navigate(['/serversrouting', 1, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'loading' });
  }
}
