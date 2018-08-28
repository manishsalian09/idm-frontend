import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { DesktopComponent } from './desktop/desktop.component';
import { DesktopModule } from './desktop/desktop.module';
import { AuthGuard } from './user/login/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'desktop' },
  { path: 'login', component: LoginComponent },
  { path: "**", redirectTo: 'desktop' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    UserModule,
    DesktopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
