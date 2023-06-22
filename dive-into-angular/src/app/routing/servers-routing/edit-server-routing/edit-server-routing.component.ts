import { Component, OnInit } from '@angular/core';
import { Server2Service } from '../server2.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server-routing',
  templateUrl: './edit-server-routing.component.html',
  styleUrls: ['./edit-server-routing.component.css']
})
export class EditServerRoutingComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string } | undefined;
  serverName: string = '';
  serverStatus: string = '';
  allowEdit!: boolean;
  fragment!: string | null;
  changedSaved: boolean = false;

  constructor(private _serversService: Server2Service, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((param: Params) => {
      this.server = this._serversService.getServer(parseInt(param['id']));
    });
    this.serverName = this.server!.name;
    this.serverStatus = this.server!.status;

    this._route.queryParams.subscribe((query: Params) => {
      this.allowEdit = query['allowEdit'] === '1' ? true : false
    });
    this._route.fragment.subscribe((frag) => {
      this.fragment = frag;
    });
    // console.log(this.allowEdit);
    // console.log(this.fragment);
  }

  onUpdateServer() {
    this._serversService.updateServer(this.server!.id, { name: this.serverName, status: this.serverStatus });
    this.changedSaved = true;
    this._router.navigate(['../'], { relativeTo: this._route });
  }

  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    if (!this.allowEdit)
      return true;
    if ((this.serverName !== this.server?.name || this.serverStatus != this.server.status) && this.changedSaved === false) {
      return confirm("Do you want to discard changes?");
    }
    else return true;
  }
}
