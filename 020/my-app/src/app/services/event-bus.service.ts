import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  statusUpdate = new EventEmitter<string>();

  constructor() {
  }

}
