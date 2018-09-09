import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from './role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  create(role: Role): Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/roles", role);
  }
}
