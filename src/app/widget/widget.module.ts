import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password/password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressPipe } from './progress.pipe';
import { RainbowDirective } from './rainbow.directive';
import { MaterialFormComponent } from './material-form/material-form.component';
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PasswordComponent, ProgressPipe, RainbowDirective, MaterialFormComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  exports: [PasswordComponent, ProgressPipe, RainbowDirective, MaterialFormComponent]
})
export class WidgetModule { }
