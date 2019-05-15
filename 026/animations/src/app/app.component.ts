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
    trigger('preventAnimation', [
      // use an empty animation as parent of the list1 to prevent animation for it
      transition('void => *', [])
    ]),
    trigger('list1', [state('in', style({
      // this is the final style that the animation goes to it
      opacity: 1,
      transform: 'translateX(0px)'
    })),
      // void is for items not present in the DOM
      transition('void => *', [
        style({
          // this style will be applied before animation starts
          // so this would be the initial style of element
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)]),
      // animation for removing item from DOM
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ])
    ])
  ],
})
export class AppComponent {
  title = 'animations';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item: string) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
