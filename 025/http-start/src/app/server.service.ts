import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Server} from './server';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  postServers(servers: any[]) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post('https://angularsamples.firebaseio.com/data.json', servers, {
      headers: headers
    }).subscribe(value => {
      console.log(value);
    });
  }

  putServers(servers: any[]) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.put('https://angularsamples.firebaseio.com/data.json', servers, {
      headers: headers
    }).subscribe(value => {
      console.log(value);
    });
  }

  getServers() {
    this.http.get<Server[]>('https://angularsamples.firebaseio.com/data.json').subscribe((value: Server[]) => {
      for (const s of value) {
        console.log(s);
      }
    });
  }

  getServers2(): Observable<Server[]> {
    return this.http.get<Server[]>('https://angularsamples.firebaseio.com/data.json');
  }

  putAppName(name: string) {
    const appName = {'AppName': name};
    this.http.put('https://angularsamples.firebaseio.com/data.json', appName).subscribe();
  }

  getAppName() {
    return this.http.get('https://angularsamples.firebaseio.com/data.json').pipe(
      map((value, index) => {
        return value['AppName'];
      })
    );
  }
}
