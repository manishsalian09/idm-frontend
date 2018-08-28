import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin: boolean;

  constructor(private router: Router, private http: HttpClient, private token: TokenService) { }

  login(employeeId: string, password: string) {
    console.log(employeeId);
    
    this.authenticate(employeeId, password).subscribe(data => {
      this.token.saveToken(data.token);  
    });

    if (employeeId === 'supervisor' && password === 'supervisor') {
      this.isLoggedin = true;
      this.router.navigate(['/desktop'])
    }
  }

  logout() {
    if (this.isLoggedin === true) {
      this.isLoggedin = false;
      this.router.navigate(['/login']);
    }
  }

  authenticate(employeeId: string, password: string): Observable<any> {
    const credentials = {username: employeeId, password: password};
    console.log('attempAuth ::');
    return this.http.post('http://localhost:8080/token/generate-token', credentials);
  }
}
