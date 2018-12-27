import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  public serverId: Number = 10;
  private serverStatus: String = 'Offline';

  constructor() { }

  public getServerStatus(): String {
    return this.serverStatus;
  }

  ngOnInit() {
  }

}
