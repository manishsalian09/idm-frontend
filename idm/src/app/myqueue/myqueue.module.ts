import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyqueueComponent } from './myqueue.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    MyqueueComponent
  ],
  declarations: [MyqueueComponent]
})
export class MyqueueModule { }
