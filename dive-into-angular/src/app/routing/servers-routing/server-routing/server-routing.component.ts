import { Component, OnInit } from '@angular/core';
import { Server2Service } from '../server2.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server-routing',
  templateUrl: './server-routing.component.html',
  styleUrls: ['./server-routing.component.css']
})
export class ServerRoutingComponent implements OnInit {
  server: { id: number, name: string, status: string } | undefined;
  id!: number;
  constructor(private _serversService: Server2Service, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((param: Params) => this.id = parseInt(param['id']));
    this.server = this._serversService.getServer(this.id);
  }

}
