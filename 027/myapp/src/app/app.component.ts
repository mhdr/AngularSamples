import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'myapp';
  @ViewChild('divBox') divBox: ElementRef;

  ngAfterViewInit(): void {

    setTimeout(() => {
      $(this.divBox.nativeElement).hide();
    }, 3000);

  }
}
