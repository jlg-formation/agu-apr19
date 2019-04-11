import { Directive, ElementRef, Input } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @Input() set speed(val: number) {
    const myColorObs = interval(val).pipe(map(n => n % 360));

    myColorObs.subscribe(
      n => this.el.nativeElement.style.color = `hsl(${n}, 100%, 50%)`
    );
   }

  constructor(private el: ElementRef) {
  }

}
