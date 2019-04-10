import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  inputType = 'password';
  constructor() { }

  ngOnInit() {
  }

  show() {
    this.inputType = 'text';
  }

  hide() {
    this.inputType = 'password';
  }
}
