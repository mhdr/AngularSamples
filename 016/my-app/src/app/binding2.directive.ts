import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBinding2]'
})
export class Binding2Directive implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor() {
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
