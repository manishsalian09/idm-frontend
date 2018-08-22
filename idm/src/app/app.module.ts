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

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  //{ path: 'create-role', component: CreateRoleComponent },
  //{ path: 'modify-role', component: ModifyRoleComponent },
  { path: 'myqueue', component: MyqueueComponent },
  //{ path: 'new-assignment', component: CreateAssignmentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MyqueueModule,
    BrowserAnimationsModule,
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
