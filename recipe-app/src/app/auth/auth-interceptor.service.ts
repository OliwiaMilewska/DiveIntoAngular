import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, exhaustMap, take } from "rxjs";
import { AuthService } from "../shared/services/auth.service";
import { User } from "../shared/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private _auth: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this._auth.user.pipe(
            take(1),
            exhaustMap((user: User) => {
                if (!user) { //For logging and signup purposes because there is no token yet and requests didn't go.
                    return next.handle(req);
                }
                let authRequest = req.clone({ params: new HttpParams().set('auth', user.token) });
                return next.handle(authRequest);
            }));
    }
}