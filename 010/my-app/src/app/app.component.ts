import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isClicked = false;
  backgroundColor = 'Blue';

  getBackgroundColor() {
    return 'Green';
  }

  onButtonClick() {
    this.isClicked = true;
  }
}
