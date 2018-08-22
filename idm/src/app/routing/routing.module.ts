import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyqueueComponent } from '../myqueue/myqueue.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  //{ path: 'create-role', component: CreateRoleComponent },
  //{ path: 'modify-role', component: ModifyRoleComponent },
  { path: 'myqueue', component: MyqueueComponent },
  //{ path: 'new-assignment', component: CreateAssignmentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
