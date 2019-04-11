import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor(el: ElementRef) {
    console.log('build directive');
    el.nativeElement.style.color = 'yellow';
  }

}
