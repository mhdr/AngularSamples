import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  postServers(servers: any[]) {
    this.http.post('https://angularsamples.firebaseio.com/data.json', servers).subscribe(value => {
      console.log(value);
    });
  }

  putServers(servers: any[]) {
    this.http.put('https://angularsamples.firebaseio.com/data.json', servers).subscribe(value => {
      console.log(value);
    });
  }
}
