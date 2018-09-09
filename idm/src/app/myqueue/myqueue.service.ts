import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RoleApprover1 } from './myqueue';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyqueueService {

  constructor(private http: HttpClient) { }

  loadRoleQueue(): Observable<RoleApprover1[]> {
    return this.http.get("http://localhost:8080/api/v1/roles/approvers")
    .pipe(
      map((data: any[]) => {
        let roleApprovers: RoleApprover1[] = [];
        data.forEach(element => {
          let roleApprover: RoleApprover1 = new RoleApprover1();
          roleApprover.name = element.role.roleName;
          roleApprover.description = element.role.description;
          roleApprover.action = element.role.action
          roleApprover.createdBy = element.createdBy
          roleApprover.createdOn = element.createdOn
          roleApprover.modifiedBy = element.modifiedBy
          roleApprover.modifiedOn = element.modifiedOn
          roleApprover.status = element.status;
          roleApprovers.push(roleApprover);
        }); 
        return roleApprovers;
      })
    );
  }

}
