import {Component, OnInit} from '@angular/core';
import {EventBusService} from '../services/event-bus.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private eventBus: EventBusService) {
  }

  ngOnInit() {
  }

  onInputChanged(event: Event) {
    // todo here
  }

}
