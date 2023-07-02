import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from '../shared/services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/others/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = '';
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(private _authService: AuthService, private _router: Router, private _cmpFactoryResolver: ComponentFactoryResolver) { }

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

    authObs.subscribe((res: AuthResponseData) => {
      this.isLoading = false;
      this._router.navigate(['/recipes']);
    },
      errorResponse => {
        this.error = errorResponse;
        this.showErrorAlert(errorResponse);
        this.isLoading = false;
        setTimeout(() => {
          this.error = '';
        }, 3000);
      });

    form.reset();
  }

  onHandleError(): void {
    this.error = '';
  }

  private showErrorAlert(message: string): void {
    let alertCmpFactory = this._cmpFactoryResolver.resolveComponentFactory(AlertComponent);
    let hostViewContainerRef = this.alertHost.viewcontainerRef;
    hostViewContainerRef.clear();

    let componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = message;
    
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.closeSub)
      this.closeSub.unsubscribe();
  }
}