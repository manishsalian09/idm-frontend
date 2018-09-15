import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RoleQueue } from './myqueue';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyqueueService {

  constructor(private http: HttpClient) { }

  loadRoleQueue(): Observable<RoleQueue[]> {
    return this.http.get("http://localhost:8080/api/v1/roles/approvers")
    .pipe(
      map((data: any[]) => {
        let roleApprovers: RoleQueue[] = [];
        data.forEach(element => {
          let approver: RoleQueue = new RoleQueue();
          approver.id = element.id;
          approver.name = element.role.name;
          approver.description = element.role.description;
          approver.action = element.role.action
          approver.createdBy = element.createdBy
          approver.createdOn = element.createdOn
          approver.modifiedBy = element.modifiedBy
          approver.modifiedOn = element.modifiedOn
          approver.status = element.status;
          approver.approvalType = element.approvalType;
          roleApprovers.push(approver);
        }); 
        return roleApprovers;
      })
    );
  }

}
