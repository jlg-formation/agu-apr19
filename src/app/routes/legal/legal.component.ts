import { Component, OnInit } from '@angular/core';
import { ProgressPipe } from 'src/app/widget/progress.pipe';
import { BehaviorSubject } from 'rxjs';

const STR = 'orsys is a very good company for doing training in Angular';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  obs = new ProgressPipe().transform(STR, 50);
  subject = new BehaviorSubject('');
  isVisible = false;
  constructor() {
    this.obs.subscribe(this.subject);
  }

  ngOnInit() {
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
