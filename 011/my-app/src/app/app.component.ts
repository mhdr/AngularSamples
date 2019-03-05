import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];

  onButtonClick() {
    // just push a date to servers
    this.servers.push(new Date());
  }
}
