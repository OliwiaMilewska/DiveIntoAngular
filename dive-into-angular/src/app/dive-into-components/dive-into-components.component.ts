import { Component } from '@angular/core';
import { ServerElement } from '../models/serverElement.model';

@Component({
  selector: 'app-dive-into-components',
  templateUrl: './dive-into-components.component.html',
  styleUrls: ['./dive-into-components.component.css']
})
export class DiveIntoComponentsComponent {
  serverElements: ServerElement[] = [];

  onServerAdded(serverData: any): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: any): void {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}