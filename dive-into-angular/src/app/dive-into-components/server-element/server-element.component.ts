import { AfterContentInit, Component, ContentChild, ElementRef, Input, ViewChild, } from '@angular/core';
import { ServerElement } from '../../models/serverElement.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input('srvEl') element!: ServerElement;
  @ViewChild('heading') header!: ElementRef;
  @ContentChild('contentParagraph') paragraph!: ElementRef;

  constructor() { }

}
