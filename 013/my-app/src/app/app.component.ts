import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverId;
  time;

  /**
   * receive data from event
   */
  onServerStatusChanged(data: { serverId: number, time: Date }) {
    this.serverId = data.serverId;
    this.time = data.time;
  }
}
