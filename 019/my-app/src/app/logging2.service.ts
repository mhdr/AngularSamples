import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logging2Service {

  constructor() {
  }

  logStatus(status: string) {
    console.log('Status : ' + status);
  }
}
