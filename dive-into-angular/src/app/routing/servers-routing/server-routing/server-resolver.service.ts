import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Server2Service } from "../server2.service";

@Injectable({
    providedIn: 'root'
})
export class ServerResolver implements Resolve<{ id: number, name: string, status: string } | undefined>{
    constructor(private _servService: Server2Service) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { id: number, name: string, status: string } | undefined | Observable<{ id: number, name: string, status: string }> | Promise<{ id: number, name: string, status: string }> {
        return this._servService.getServer(parseInt(route.params['id']));
    }
}
