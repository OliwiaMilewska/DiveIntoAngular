import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home-routing',
  templateUrl: './home-routing.component.html',
  styleUrls: ['./home-routing.component.css']
})
export class HomeRoutingComponent {

  constructor(private router: Router, private _authService: AuthService) { }

  onLoadServers(id: number): void {
    this.router.navigate(['/serversrouting', 1, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'loading' });
  }

  onLogin(): void {
    this._authService.login();
  }

  onLogout(): void {
    this._authService.logout();
  }
}
