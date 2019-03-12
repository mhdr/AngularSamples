import {Component, OnInit} from '@angular/core';
import {EventBusService} from '../services/event-bus.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  output: string;

  constructor(private eventBus: EventBusService) {
  }

  ngOnInit() {
  }

}
