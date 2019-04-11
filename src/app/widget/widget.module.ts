import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password/password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressPipe } from './progress.pipe';

@NgModule({
  declarations: [PasswordComponent, ProgressPipe],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [PasswordComponent, ProgressPipe]
})
export class WidgetModule { }
