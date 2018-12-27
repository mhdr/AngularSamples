import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  public allowAddServer: Boolean = false;

  constructor() {

    setTimeout(() => {
      this.allowAddServer = true; // after 2 seconds enable the button
    }, 2000);

  }

  ngOnInit() {
  }

}
