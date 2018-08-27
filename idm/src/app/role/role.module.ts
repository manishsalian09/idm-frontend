import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { MatStepperModule, MatInputModule, MatAutocompleteModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    ComponentsModule,
    MatButtonModule
  ],
  exports: [
    RoleComponent
  ],
  declarations: [RoleComponent]
})
export class RoleModule { }
