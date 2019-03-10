import {Injectable} from '@angular/core';
import {Logging2Service} from './logging2.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private loggingService: Logging2Service) {
  }

  addNewData(name: string, age: number) {
    // insert data to db
    // db.insert(name,number);

    this.loggingService.logStatus('New');
  }
}
