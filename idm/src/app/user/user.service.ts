import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  search(term: string): Observable<User []> {
    return this.http.get("http://localhost:8080/api/v1/users/firstname?searchterm=" + term)
    .pipe(
      map((data: any[]) => {
        let userArr: User[] = [];
        data.forEach(element => {
          let user: User = new User();
          user.id = element.id;
          user.firstName = element.firstName;
          user.middleName = element.middleName;
          user.lastName = element.lastName;
          user.employeeId = element.employeeId;
          user.active = element.active;
          user.emailId = element.emailId;
          user.manager = element.manager;
          userArr.push(user);
        });
        return userArr;
      })
    );
  }

  public findUser(employeeId: String): Observable<User> {
    return this.http.get("http://localhost:8080/api/v1/users/" + employeeId)
    .pipe(
      map((data: any) => {
        let user = new User();
        user.employeeId = data.employeeId;
        user.firstName = data.firstName;
        user.middleName = data.middleName;
        user.lastName = data.lastName;
        user.emailId = data.emailId;
        user.manager = data.manager;
        return user;
      })
    );
  }
}
