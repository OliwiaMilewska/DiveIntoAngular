import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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

  @ViewChild('serverContentInput') serverContentInput!: ElementRef;
  @ViewChild('serverNameInput') serverNameInput!: ElementRef;

  // Using ngModel
  onAddServer1() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});    
  }

  onAddBlueprint1() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});  
  }

  // Using Local References in a Template
  onAddServerRef(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: serverNameInput.value, serverContent: serverContentInput.value });
  }

  onAddBlueprintRef(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: serverNameInput.value, serverContent: serverContentInput.value });
  }

  // Using ViewChild()
  onAddServer() {
    this.serverCreated.emit({ serverName: this.serverNameInput.nativeElement.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({ serverName: this.serverNameInput.nativeElement.value, serverContent: this.serverContentInput.nativeElement.value });
  }
}
