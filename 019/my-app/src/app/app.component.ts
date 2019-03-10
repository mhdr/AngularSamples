import {Component} from '@angular/core';
import {Logging2Service} from './logging2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logging2Service]
})
export class AppComponent {

  constructor(private loggingService: Logging2Service) {
  }

  onButtonClick() {
    this.loggingService.logStatus('New');
  }
}
