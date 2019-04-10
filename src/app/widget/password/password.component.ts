import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEye as farEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  inputType = 'password';
  faEye = faEye;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.inputType = 'text';
    this.faEye = farEye;
  }

  hide() {
    this.inputType = 'password';
    this.faEye = faEye;
  }
}
