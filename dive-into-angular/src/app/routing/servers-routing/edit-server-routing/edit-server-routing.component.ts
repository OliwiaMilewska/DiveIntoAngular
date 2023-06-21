import { Component } from '@angular/core';
import { Server2Service } from '../server2.service';

@Component({
  selector: 'app-edit-server-routing',
  templateUrl: './edit-server-routing.component.html',
  styleUrls: ['./edit-server-routing.component.css']
})
export class EditServerRoutingComponent {
  server: { id: number, name: string, status: string } | undefined;
  serverName = '';
  serverStatus = '';

  constructor(private _serversService: Server2Service) { }

  ngOnInit() {
    this.server = this._serversService.getServer(1);
    this.serverName = this.server!.name;
    this.serverStatus = this.server!.status;
  }

  onUpdateServer() {
    this._serversService.updateServer(this.server!.id, { name: this.serverName, status: this.serverStatus });
  }
}
