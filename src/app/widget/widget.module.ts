import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password/password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [PasswordComponent]
})
export class WidgetModule { }
