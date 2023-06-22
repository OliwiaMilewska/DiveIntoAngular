import { Component } from '@angular/core';
import { Server2Service } from '../server2.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server-routing',
  templateUrl: './edit-server-routing.component.html',
  styleUrls: ['./edit-server-routing.component.css']
})
export class EditServerRoutingComponent {
  server: { id: number, name: string, status: string } | undefined;
  serverName = '';
  serverStatus = '';
  allowEdit!: number;
  fragment!: string | null;

  constructor(private _serversService: Server2Service, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.server = this._serversService.getServer(1);
    this.serverName = this.server!.name;
    this.serverStatus = this.server!.status;

    this._route.queryParams.subscribe((query: Params) => {
      this.allowEdit = query['allowEdit']
    });
    this._route.fragment.subscribe((frag) => {
      this.fragment = frag;
    });
    console.log(this.allowEdit);
    console.log(this.fragment);
  }

  onUpdateServer() {
    this._serversService.updateServer(this.server!.id, { name: this.serverName, status: this.serverStatus });
  }
}
