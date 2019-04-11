import { Component, OnInit } from '@angular/core';
import { ProgressPipe } from 'src/app/widget/progress.pipe';
import { BehaviorSubject, interval } from 'rxjs';
import { map } from 'rxjs/operators';


const STR = 'orsys is a very good company for doing training in Angular';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {
  str = STR;
  obs = new ProgressPipe().transform(STR, 50);
  subject = new BehaviorSubject('');
  isVisible = false;

  myColorObs = interval(50).pipe(map(n => n % 360));

  myColor = 'red';
  constructor() {
    this.obs.subscribe(this.subject);
    this.myColorObs.subscribe(
      n => this.myColor = `hsl(${n}, 100%, 50%)`
    );
  }

  ngOnInit() {
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

}
