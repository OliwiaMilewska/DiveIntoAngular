import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-page',
  templateUrl: './directive-page.component.html',
  styleUrls: ['./directive-page.component.css']
})
export class DirectivePageComponent {
  oddNumbers: number[] = [1, 3, 5];
  evenNumbers: number[] = [2, 4];
  onlyOdd: boolean = false;
  value: number = 5;
}
