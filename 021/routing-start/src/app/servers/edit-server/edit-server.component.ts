import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CanComponenDeactive} from '../../can-deactivate.guard';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponenDeactive {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    // retrieve params on initializing
    this.allowEdit = this.route.snapshot.queryParams['allowEdit'] === '1' ? true : false;
    console.log(this.route.snapshot.fragment);

    // retrieve params on changes
    this.route.queryParams.subscribe((value: Params) => {
      this.allowEdit = value['allowEdit'] === '1' ? true : false;
    });

    this.route.fragment.subscribe((value: string) => {
      console.log(value);
    });

    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((value: Params) => {
      this.server = this.serversService.getServer(+value['id']);
    });

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    }
    {
      return true;
    }
  }
}
