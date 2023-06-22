import { Component, OnInit } from '@angular/core';
import { Server2Service } from '../server2.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server-routing',
  templateUrl: './server-routing.component.html',
  styleUrls: ['./server-routing.component.css']
})
export class ServerRoutingComponent implements OnInit {
  server: { id: number, name: string, status: string } | undefined;

  constructor(private _serversService: Server2Service, private _route: ActivatedRoute, private __router: Router) { }

  ngOnInit() {
    // this._route.params.subscribe((param: Params) => this.server = this._serversService.getServer(parseInt(param['id'])));
    this._route.data.subscribe((data: Data) => this.server = data['server']);
  }

  onEditServer(): void {
    this.__router.navigate(['edit'], { relativeTo: this._route, queryParamsHandling: 'preserve' });
  }
}
