import {Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0px)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)',
      })),
      transition('normal => highlighted', [animate(300)]),
      transition('highlighted => normal', [animate(800)])
    ])
  ]
})
export class AppComponent {
  title = 'animations';
  state = 'normal';

  onAnimate() {
    // switch state
    if (this.state === 'normal') {
      this.state = 'highlighted';
    } else {
      this.state = 'normal';
    }
  }
}
