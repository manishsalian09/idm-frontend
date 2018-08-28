import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { RouterModule, Routes } from '@angular/router';
import { DesktopModule } from './desktop/desktop.module';
import { AuthComponent } from './user/auth/auth.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'desktop' },
  { path: 'login', component: AuthComponent },
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
