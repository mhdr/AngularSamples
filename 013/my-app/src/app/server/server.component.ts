import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  // this is now an event
  @Output() statusChanged = new EventEmitter<{ serverId: number, time: Date }>();
  status = 'offline';

  constructor() {
    setTimeout(() => {
      this.status = 'online';

      // fire event
      this.statusChanged.emit({serverId: 10, time: new Date()});
    }, 5000);
  }

  ngOnInit() {
  }

}
