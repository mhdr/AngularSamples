import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './MyValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, MyValidators.forbiddenNames]),
        'email': new FormControl(null, [Validators.required, Validators.email],
          [MyValidators.forbiddenEmails])
      }),
      'gender': new FormControl('male'), // default value for radiobutton => male
      'hobbies': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe(value => {
      console.log(value);
    });

    this.signupForm.get('userData.email').valueChanges.subscribe(value => {
      console.log(value);
    });

    this.signupForm.statusChanges.subscribe(value => {
      console.log(value);
    });

    this.signupForm.get('userData.email').statusChanges.subscribe(value => {
      console.log(value);
    });

    this.signupForm.setValue({
      'userData': {
        'username': 'mahmood',
        'email': 'mahmood@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    this.signupForm.patchValue({
      'userData': {
        'username': 'mahmood2'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const newControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(newControl);
  }

}
