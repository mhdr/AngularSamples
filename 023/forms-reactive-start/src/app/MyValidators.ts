import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

export class MyValidators {
  static forbiddenNames(control: FormControl): { [s: string]: boolean } {

    const forbidden = ['Mahmood', 'Reza', 'Ahmad'];

    if (forbidden.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }

    return null;
  }

  static forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    }));

    return promise;
  }
}
