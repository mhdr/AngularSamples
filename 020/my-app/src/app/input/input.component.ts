import {Component, Input, OnInit} from '@angular/core';
import {EventBusService} from '../services/event-bus.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  inputText: string;

  constructor(private eventBus: EventBusService) {
  }

  ngOnInit() {
  }

  onInputChanged(event: Event) {

    this.inputText = (event.target as HTMLInputElement).value;
    this.eventBus.statusUpdate.emit(this.inputText);
  }

}
