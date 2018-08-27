import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from '../desktop/desktop.component';
import { DesktopModule } from '../desktop/desktop.module';

const routes: Routes = [
  { path: 'desktop', component: DesktopComponent }
];

@NgModule({
  imports: [
    CommonModule,
    DesktopModule,
    RouterModule.forChild(routes)
    
  ],
  exports: [
    LoginComponent,
    RouterModule
  ],
  declarations: [LoginComponent]
})
export class UserModule { }
