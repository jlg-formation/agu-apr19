import { Directive, ElementRef, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  s: Subscription;

  @Input() set speed(val: number) {
    if (this.s) {
      this.s.unsubscribe();
    }
    const myColorObs = interval(val).pipe(
      map(n => n % 360),
      map(n => `hsl(${n}, 100%, 50%)`));

    this.s = myColorObs.subscribe(
      n => this.el.nativeElement.style.color = n
    );
  }

  constructor(private el: ElementRef) {
  }

}
