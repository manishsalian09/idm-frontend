import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyqueueComponent } from './myqueue.component';
import { ComponentsModule } from '../components/components.module';
import { MatExpansionModule, MatBadgeModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatExpansionModule,
    MatBadgeModule
  ],
  exports: [
    MyqueueComponent
  ],
  declarations: [MyqueueComponent]
})
export class MyqueueModule { }
