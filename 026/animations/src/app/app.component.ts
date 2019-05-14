import {Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, useAnimation,
  // ...
} from '@angular/animations';
import {bounceIn} from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animation1', [transition('1 <=> 2', useAnimation(bounceIn, {
      params: {timing: 2, delay: 0.05}
    }))])
  ],
})
export class AppComponent {
  title = 'animations';
  state1 = 1;

  onAnimate() {
    // switch state
    if (this.state1 === 1) {
      this.state1 = 2;
    } else {
      this.state1 = 1;
    }
  }

  onAnimationStarted(event) {
    console.log(event);
  }

  onAnimationDone(event) {
    console.log(event);
  }
}
