import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEye as farEye } from '@fortawesome/free-regular-svg-icons';
import { AbstractValueAccessor, MakeProvider } from '../AbstractValueAccessor';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [MakeProvider(PasswordComponent)],

})
export class PasswordComponent extends AbstractValueAccessor implements OnInit {

  inputType = 'password';
  faEye = faEye;

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
