import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  // template: `
  // <button class="button btn-primary"></button>
  // <app-server></app-server>
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreation: string = 'No server was created.';
  serverName: string = '';
  username: string = '';

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  onCreateServer(): void {
    this.serverCreation = `Server called '${this.serverName}' was created!`;
  }

  onUpdateServerName(event: Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onDeleteUsername(): void{
    this.username = '';
  }
}
