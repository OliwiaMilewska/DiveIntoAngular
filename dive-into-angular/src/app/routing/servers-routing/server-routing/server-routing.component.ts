import { Component, OnInit } from '@angular/core';
import { Server2Service } from '../server2.service';

@Component({
  selector: 'app-server-routing',
  templateUrl: './server-routing.component.html',
  styleUrls: ['./server-routing.component.css']
})
export class ServerRoutingComponent implements OnInit {
  server: { id: number, name: string, status: string } | undefined;

  constructor(private _serversService: Server2Service) { }

  ngOnInit() {
    this.server = this._serversService.getServer(1);
  }
}
