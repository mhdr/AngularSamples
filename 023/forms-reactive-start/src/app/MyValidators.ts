import {FormControl} from '@angular/forms';

export class MyValidators {
  static forbiddenNames(control: FormControl): { [s: string]: boolean } {

    const forbidden = ['Mahmood', 'Reza', 'Ahmad'];

    if (forbidden.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }

    return null;
  }
}
