import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  genders: string[] = ['male', 'female'];
  signUpForm!: FormGroup;
  submitted: boolean = false;
  forbiddenUsernames = ['Chris', 'Anna'];

  user = {
    username: '',
    email: '',
    gender: '',
    hobbies: []
  };

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, Validators.minLength(3), this.forbiddenNames.bind(this)]),
        email: new FormControl(null, Validators.required),
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([])
    });
  }

  onSubmit(): void {
    console.log(this.signUpForm);
    console.log(this.signUpForm.value.userData.username);

    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.gender;
    this.user.hobbies = this.signUpForm.value.hobbies;
    this.submitted = true;

    this.signUpForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getHobbies() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1)
      return { 'nameIsForbidden': true };
    return { 'nameIsForbidden': false };
  }
}