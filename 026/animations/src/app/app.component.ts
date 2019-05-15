import {Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, useAnimation, keyframes, group,
  // ...
} from '@angular/animations';
import {bounceIn} from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('preventAnimation', [
      transition('void => *', [])
    ]),
    trigger('list1', [state('in', style({
      opacity: 1,
      transform: 'translateX(0px)'
    })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.2 // 0.3 * 1000 = 300
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.4
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          }),
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            backgroundColor: 'red'
          })),
          animate(800, style({
            opacity: 0,
            transform: 'translateX(100px)'
          }))
        ])
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
