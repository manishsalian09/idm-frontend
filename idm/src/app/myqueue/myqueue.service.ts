import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RoleQueue } from './myqueue';

@Injectable({
  providedIn: 'root'
})
export class MyqueueService {

  constructor(private http: HttpClient) { }

  loadRoleQueue(): Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/roles/approvers");
  }

}
