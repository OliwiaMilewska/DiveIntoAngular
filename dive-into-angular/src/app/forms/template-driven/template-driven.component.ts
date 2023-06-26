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
  genders: string[] = ['female', 'male'];
  suggestedName: string = '';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted: boolean = false;

  // Option 1
  // onSubmit(form: NgForm): void {
  //   console.log("Local reference");
  //   console.log(form);
  // }

  // Option 2: Used when you need to access the form before you submit it. 
  @ViewChild('f') signUpForm!: NgForm;

  onSubmit(): void {
    console.log("View child");
    console.log(this.signUpForm);

    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    this.submitted = true;

    this.onResetForm();
  }

  setDefaultValues(): void {
    this.signUpForm.setValue({
      userData: {
        username: 'Teścikowy',
        email: 'test@email.com'
      },
      secret: 'pet',
      questionAnswer: 'This is mine answer.',
      gender: 'female'
    })
  }

  suggestUsername(): void {
    this.signUpForm.form.patchValue({
      userData: {
        username: 'Rex'
      }
    });
  }

  onResetForm(): void {
    this.signUpForm.reset();
  }
}
