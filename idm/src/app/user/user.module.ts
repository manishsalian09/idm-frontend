import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    AuthComponent
  ],
  declarations: [AuthComponent]
})
export class UserModule { }
