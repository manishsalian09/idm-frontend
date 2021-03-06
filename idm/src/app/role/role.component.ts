import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { RoleService } from './role.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { MatTableDataSource } from '@angular/material';
import { Role, RoleApprover } from './role';
import { AuthService } from '../user/auth/auth.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  private roleFormGroup: FormGroup;
  private users$: Observable<User[]>;
  private searchTerm = new Subject<string>();
  private userDS: MatTableDataSource<any>;
  private approvers: any[] = [];
  private owner: User;

  userColumn: string[] = [
    'id', 'employeeId', 'userName'
  ];
  
  constructor(private _formBuilder: FormBuilder, 
    private roleService: RoleService, 
    private userService: UserService,
    private authService: AuthService) { 
      this.userDS = new MatTableDataSource<any>();
  }

  ngOnInit() {
    this.roleFormGroup = this._formBuilder.group({
      roleName: ['', Validators.required],
      roleOwner: ['', Validators.required],
      roleDescription: ['', Validators.required],
      selectUser: ''
    });

    this.users$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.userService.search(term))
    );
  }

  search(term: string): void {
    if (term != "")
      this.searchTerm.next(term);
  }

  onSubmit(roleStepperRef) {
    let role = new Role();
    role.name = this.roleFormGroup.controls.roleName.value;
    role.description = this.roleFormGroup.controls.roleDescription.value;
    role.owner = new User();
    role.owner = this.owner;
    this.approvers.forEach(approver => {
      let roleApprover = new RoleApprover();
      roleApprover.user = new User();
      roleApprover.user.employeeId = approver.employeeId;
      roleApprover.user.id = approver.id;
      roleApprover.createdOn = Date.now();
      roleApprover.approvalType = 'User';
      role.approvers.push(roleApprover);
    });
    let roleApprover = new RoleApprover();
    roleApprover.user = new User();
    roleApprover.user = role.owner;
    roleApprover.createdOn = Date.now();
    roleApprover.approvalType = 'Owner';
    role.approvers.push(roleApprover);
    this.roleService.create(role).subscribe(result => {
      console.log(result);
      this.userDS.data = [];
      this.approvers = [];
      this.owner = null;
      roleStepperRef.reset();
    });
    
  }

  onSelect(user: User) {
    let count = this.approvers.filter(vo => (vo.employeeId===user.employeeId)).length;
    
    if (count == 0 && user.id != this.owner.id) {
      this.approvers.push({
        id: user.id,
        employeeId: user.employeeId,
        userName: user.firstName
      });
      this.userDS.data = this.approvers
    }

    this.roleFormGroup.controls.selectUser.reset();
  }

  onOwnerSelect(user: User) {
    this.owner = new User();
    this.owner.id = user.id;
  }
}
