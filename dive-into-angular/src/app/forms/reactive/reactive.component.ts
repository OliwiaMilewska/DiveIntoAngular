import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
        email: new FormControl(null, [Validators.required, Validators.email]),
        // email: new FormControl(null, [Validators.required, Validators.email] , this.forbiddenEmails), using async validator
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([])
    });

    // this.signUpForm.valueChanges.subscribe((value) => console.log(value));
    // this.signUpForm.statusChanges.subscribe((status) => console.log(status));
  } 

  onSubmit(): void {
    console.log(this.signUpForm);
    console.log(this.signUpForm.value.userData.username);

    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.gender;
    this.user.hobbies = this.signUpForm.value.hobbies;
    this.submitted = true;

    this.signUpForm.reset({gender: 'female'}); // reset but 'gender' will be set to female
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
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsforbbiden': true });
        }
        else {
          resolve(null)
        }
      }, 1500);
    });
  }

  setDefaultValues(): void {
    this.signUpForm.setValue({
      userData: {
        username: 'Teścikowy',
        email: 'test@email.com'
      },
      gender: 'female',
      hobbies: []
    })
  }

  suggestUsername(): void {
    this.signUpForm.patchValue({
      userData: {
        username: 'Rex'
      }
    });
  }
}