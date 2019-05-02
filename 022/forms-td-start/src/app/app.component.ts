import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('myForm') signupForm: NgForm;
  answer: string;
  genders = ['male', 'female'];

  /**
   * Set values all together
   */
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.setValue({
      myUserData: {
        username: suggestedName,
        email: 'test@test.com'
      },
      secret: 'pet',
      questionAnswer: 'Hello Wolrd',
      gender: 'male'
    });
  }

  /**
   * Set part of values
   */
  overrideUseName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      myUserData: {
        username: suggestedName
      }
    });
  }


  onSubmit() {
    console.log(this.signupForm);
  }
}
