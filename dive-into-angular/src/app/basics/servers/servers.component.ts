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
  created: boolean = false;
  serverName: string = '';
  username: string = '';
  servers: string[] = ['TestServer', 'TestServer 2'];
  showSecret: boolean = false;
  counter: number = 0;
  logTimeStamp: string[] = [];

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  onCreateServer(): void {
    this.serverCreation = `Server called '${this.serverName}' was created!`;
    this.created = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onDeleteUsername(): void {
    this.username = '';
  }

  onCounterIncrement(): void {
    if (this.showSecret === false){
      this.counter++;
      this.logTimeStamp.push(new Date()+'')
    }
  }
}