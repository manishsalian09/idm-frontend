import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyqueueComponent } from './myqueue.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MyqueueComponent
  ],
  declarations: [MyqueueComponent]
})
export class MyqueueModule { }
