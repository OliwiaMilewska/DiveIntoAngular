import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assigment-reactive',
  templateUrl: './assigment-reactive.component.html',
  styleUrls: ['./assigment-reactive.component.css']
})
export class AssigmentReactiveComponent implements OnInit {
  projectForm!: FormGroup;
  statuses: string[] = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames: string[] = ['Test', 'Testowy'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.checkForbiddenProjectName.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('Stable') // with default value
    });
  }

  checkForbiddenProjectName(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1)
      return { 'nameIsForbidden': true };
    return null;
  }

  onSubmit(): void{
    console.log(this.projectForm.value.name);
    console.log(this.projectForm.value.email);
    console.log(this.projectForm.value.status);

    this.projectForm.reset();
  }
}
