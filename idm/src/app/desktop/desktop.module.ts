import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { Routes, RouterModule } from '@angular/router';
import { MyqueueComponent } from '../myqueue/myqueue.component';
import { RoleComponent } from '../role/role.component';
import { HttpClientModule } from '@angular/common/http';
import { MyqueueModule } from '../myqueue/myqueue.module';
import { RoleModule } from '../role/role.module';
import { MatDividerModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';
import { HeaderComponent } from '../header/header.component';

const routes: Routes = [
  { path: 'myqueue', component: MyqueueComponent },
  {
    path: 'role',
    children: [
      { path: 'create', component: RoleComponent },
      { path: 'modify', component: RoleComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MyqueueModule,
    RoleModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DesktopComponent,
    RouterModule
  ],
  declarations: [
    DesktopComponent,
    HeaderComponent
  ]
})
export class DesktopModule { }
