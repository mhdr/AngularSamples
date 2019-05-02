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
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };
  submitted = false;

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
    this.user.username = this.signupForm.value.myUserData.username;
    this.user.email = this.signupForm.value.myUserData.email;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;

    this.signupForm.reset();
  }
}
