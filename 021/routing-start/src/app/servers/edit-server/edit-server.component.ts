import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    // retrieve params on initializing
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    // retrieve params on changes
    this.route.queryParams.subscribe((value: Params) => {
      console.log(value);
    });

    this.route.fragment.subscribe((value: string) => {
      console.log(value);
    });

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
