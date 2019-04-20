import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReactiveErrors} from '@angular/forms/src/directives/reactive_errors';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  private paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    // use to initialize user
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };


    // use this to react to changes
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
