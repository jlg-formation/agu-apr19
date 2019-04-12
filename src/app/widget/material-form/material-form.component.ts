import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {

  f = new FormGroup({
    login: new FormControl('Yosra', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submitted');
  }

}
