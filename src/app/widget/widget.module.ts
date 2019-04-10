import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule
  ],
  exports: [PasswordComponent]
})
export class WidgetModule { }
