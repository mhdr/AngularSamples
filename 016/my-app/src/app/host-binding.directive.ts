import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor() {
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
}
