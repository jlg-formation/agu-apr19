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
  speed = 50;

  constructor() {
    this.obs.subscribe(this.subject);
  }

  ngOnInit() {
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

}
