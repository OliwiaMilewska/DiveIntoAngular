import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {
  errorMessage: string = '';

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.data.subscribe((data: Data)=> this.errorMessage = data['message']);
  }
}
