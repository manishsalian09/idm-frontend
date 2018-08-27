import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin: boolean;

  constructor(private router: Router) { }

  login(employeeId: String, password: String) {
    console.log(employeeId);
    
    if (employeeId === 'supervisor' && password === 'supervisor') {
      this.isLoggedin = true;
      this.router.navigate(['/desktop'])
    }
  }

  logout() {
    this.isLoggedin = false;
    this.router.navigate(['/login']);
  }
}
