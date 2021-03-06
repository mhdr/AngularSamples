import {Component, OnInit} from '@angular/core';
import {ServerService} from './server.service';
import {Server} from './server';
import {catchError, map, retry} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpClient, HttpEvent, HttpEventType, HttpProgressEvent, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fetchedServers: Server[];
  appName = '';
  appNameServer;

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  ngOnInit(): void {
    this.appNameServer = this.server.getAppName();
  }

  constructor(private server: ServerService, private http: HttpClient) {
  }

  onPostServer() {
    this.server.postServers(this.servers);
  }

  onPutServer() {
    this.server.putServers(this.servers);
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onGetServer() {
    this.server.getServers();
  }

  onGetServer2() {
    this.server.getServers2().subscribe((value: Server[]) => {
      this.fetchedServers = value;
    });
  }

  onGetServer3() {
    this.server.getServers2().pipe(
      retry(3), // Retry up to 3 times before failing
      map((value: Server[], index: number) => {
        for (const s of value) {
          if (s.id === 0) {
            s.capacity = -1;
            s.name = '';
          }
        }

        return value;
      }),
      catchError(err => of([]))
    ).subscribe({
      next(v) {
        console.log('Value : ' + v);
      },
      error(e) {
        console.log('Error : ' + e);
      }
    });
  }

  onSaveAppName() {
    this.server.putAppName(this.appName);
  }

  onProgress() {
    const request = new HttpRequest('GET', 'https://angularsamples.firebaseio.com/data.json',
      {reportProgress: true});

    this.http.request(request).subscribe(value => {
      if (value.type === HttpEventType.DownloadProgress) {
        const newValue = value as HttpProgressEvent;
        const percent = Math.round(100 * newValue.loaded / newValue.total);
        console.log(percent);
      } else if (value.type === HttpEventType.Response) {
        console.log('File was completely downloaded!');
      }
    });
  }
}
