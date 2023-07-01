import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  tokenExpirationTimer: any = null;

  constructor(private _http: HttpClient, private _router: Router) { }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this._http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXzMP9Ve3jWo68v3eR2npuytZWBz7qnNs', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(resData => this.handleAuth(resData.email, resData.localId, resData.idToken, resData.expiresIn)));
  }

  logIn(email: string, password: string): Observable<AuthResponseData> {
    return this._http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXzMP9Ve3jWo68v3eR2npuytZWBz7qnNs', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(resData => this.handleAuth(resData.email, resData.localId, resData.idToken, resData.expiresIn)));
  }

  autoLogin(): void {
    let userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: Date
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData)
      return;

    let loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (loadedUser.token) {
      this.user.next(loadedUser);
      let expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logOut(): void {
    this.user.next(null);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }

    this._router.navigate(['/auth']);
  }

  autoLogout(expirationDuration: number): void {
    this.tokenExpirationTimer = setTimeout(() => this.logOut(), expirationDuration);
  }

  private handleAuth(email: string, localId: string, idToken: string, expiresIn: string) {
    let expirationDate = new Date(new Date().getTime() + parseInt(expiresIn) * 1000);
    let user = new User(email, localId, idToken, expirationDate);
    this.user.next(user);
    this.autoLogout(parseInt(expiresIn) * 1000);// change from s to ms

    localStorage.setItem('userData', JSON.stringify(user));
  }
  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = '';

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError('An error occured.')
    }

    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS': //Messages from docs of firebase
        errorMessage = 'This email exsists already';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is invalid for this email';
        break;
      case 'USER_DISABLED':
        errorMessage = 'Account was disabled by administrator.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exsists.';
        break;
      default:
        errorMessage = 'An unknown error occured.';
        break;
    }
    return throwError(errorMessage)
  }
}
