import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password/password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressPipe } from './progress.pipe';
import { RainbowDirective } from './rainbow.directive';

@NgModule({
  declarations: [PasswordComponent, ProgressPipe, RainbowDirective],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [PasswordComponent, ProgressPipe, RainbowDirective]
})
export class WidgetModule { }
