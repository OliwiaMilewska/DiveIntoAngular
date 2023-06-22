import { Component, OnInit } from '@angular/core';
import { Server2Service } from './server2.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers-routing',
  templateUrl: './servers-routing.component.html',
  styleUrls: ['./servers-routing.component.css']
})
export class ServersRoutingComponent implements OnInit {
  servers: { id: number, name: string, status: string }[] = [];

  constructor(private _serService: Server2Service, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this._serService.getServers();
  }

  onReload(): void {
    this.router.navigate(['/serversrouting'], { relativeTo: this.route });
  }
}
