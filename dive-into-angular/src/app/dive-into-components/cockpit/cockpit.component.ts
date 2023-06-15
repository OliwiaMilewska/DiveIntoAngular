import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName: string = '';
  newServerContent: string = '';

  // Using ngModel
  // onAddServer() {
  //   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});    
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});  
  // }

  // Using Local References in a Template
  onAddServer(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: serverNameInput.value, serverContent: serverContentInput.value });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: serverNameInput.value, serverContent: serverContentInput.value });
  }
}
