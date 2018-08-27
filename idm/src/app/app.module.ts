import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatSidenavModule, 
  MatDividerModule, 
  MatListModule, 
  MatToolbarModule,
  MatMenuModule,
  MatIconModule
} from '@angular/material';
import { MyqueueModule } from './myqueue/myqueue.module';
import { Routes, RouterModule } from '@angular/router';
import { MyqueueComponent } from './myqueue/myqueue.component';
import { HttpClientModule } from '@angular/common/http';
import { RoleComponent } from './role/role.component';
import { RoleModule } from './role/role.module';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'myqueue', component: MyqueueComponent },
  {
    path: 'role',
    children: [
      { path: 'create', component: RoleComponent },
      { path: 'modify', component: RoleComponent}
    ]
  },
  { path: "**", redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MyqueueModule,
    RoleModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
