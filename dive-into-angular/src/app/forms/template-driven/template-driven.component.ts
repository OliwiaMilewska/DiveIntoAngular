import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  defaultQuestion: string = 'pet';
  answer: string = '';
  // Option 1
  // onSubmit(form: NgForm): void {
  //   console.log("Local reference");
  //   console.log(form);
  // }

  // Option 2: Used when you need to access the form before you submit it. 
  @ViewChild('f') form!: NgForm;

  onSubmit(): void {
    console.log("View child");
    console.log(this.form);
  }

  suggestUsername() {

  }
}
