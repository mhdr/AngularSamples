import {Component, OnInit} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId = 0;
  status = 'offline';

  constructor() {

    // choose a number between 0 and 100
    this.serverId = Math.floor((Math.random() * 100) + 1);

    const random2 = Math.random();

    if (random2 > 0.5) {
      this.status = 'online';
    } else {
      this.status = 'offline';
    }

  }

  ngOnInit() {
  }

}
