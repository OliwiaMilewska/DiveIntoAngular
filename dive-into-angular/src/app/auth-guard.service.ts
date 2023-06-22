import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private _authService: AuthService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this._authService.isAuthenticated().then((auth: boolean) => {
            if (auth) {
                return true;
            } else {
                return this._router.navigate(['/']);
            }
        });
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(childRoute, state);
    }
}

// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Observable } from "rxjs";
// import { AuthService } from "./auth.service";

// export const authGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
//   const authService = new AuthService();
//   const router = new Router();

//   return authService.isAuthenticated().then((auth: boolean) => {
//     if (auth) {
//       return true;
//     } else {
//       return router.navigate(['/']);
//     }
//   });
// };

// @Injectable({
//   providedIn: 'root',
//   useFactory: authGuardFn
// })
// export class AuthGuard { }
