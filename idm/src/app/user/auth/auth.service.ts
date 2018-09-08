import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$: Observable<User>;
  isLoggedin: boolean;
  employeeId: String;

  constructor(private router: Router, 
    private http: HttpClient, 
    private token: TokenService,
    private userService: UserService) { }

  login(employeeId: string, password: string) {
    this.authenticate(employeeId, password).subscribe(data => {
      if (data.token != null) {
        this.token.saveToken(data.token); 
        this.isLoggedin = true;
        this.employeeId = employeeId;
        this.router.navigate(['/desktop']) 
      }
    });
  }

  logout() {
    if (this.isLoggedin === true) {
      this.isLoggedin = false;
      this.router.navigate(['/login']);
    }
  }

  authenticate(employeeId: string, password: string): Observable<any> {
    const credentials = {employeeId: employeeId, password: password};
    return this.http.post('http://localhost:8080/api/v1/users/auth', credentials);
  }

  loggedInUser(): Observable<User> {
    if (this.user$ == null) {
      this.user$ = this.userService.findUser(this.employeeId)
    }
    return this.user$;
  }

}
