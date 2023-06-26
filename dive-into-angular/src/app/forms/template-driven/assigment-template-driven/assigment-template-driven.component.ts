import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assigment-template-driven',
  templateUrl: './assigment-template-driven.component.html',
  styleUrls: ['./assigment-template-driven.component.css']
})
export class AssigmentTemplateDrivenComponent {
  @ViewChild('form') userForm!: NgForm;
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  defaultSub: string = 'advanced';
  submitted: boolean = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit(): void {
    this.submitted = true;
    this.user.email = this.userForm.value.email;
    this.user.subscription = this.userForm.value.subs;
    this.user.password = this.userForm.value.password;

    this.userForm.reset();
  }
}
