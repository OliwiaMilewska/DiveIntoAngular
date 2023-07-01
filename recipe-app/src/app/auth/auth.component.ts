import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from '../shared/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = '';

  constructor(private _authService: AuthService, private _router: Router) { }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) return;
    let email: string = form.value.email;
    let password: string = form.value.password;
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this._authService.logIn(email, password);
    }
    else {
      authObs = this._authService.signUp(email, password);
    }

    authObs.subscribe((res) => {
      this.isLoading = false;
      this._router.navigate(['/recipes']);
    },
      errorResponse => {
        this.error = errorResponse;
        this.isLoading = false;
        setTimeout(() => {
          this.error = '';
        }, 3000);
      });

    form.reset();
  }
}
