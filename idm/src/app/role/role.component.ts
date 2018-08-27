import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { RoleService } from './role.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roleFormGroup: FormGroup;
  users$: Observable<User[]>;
  private searchTerm = new Subject<string>();
  userDS: MatTableDataSource<any>;

  userColumn: string[] = [
    'employeeId', 'userName'
  ];
  
  constructor(private _formBuilder: FormBuilder, private roleService: RoleService, private userService: UserService) { 
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

  }

  approverData: any[] = [];
  onSelect(user: User) {
    let count = this.approverData.filter(vo => (vo.employeeId===user.employeeId)).length;
    
    if (count == 0) {
      this.approverData.push({
        employeeId: user.employeeId,
        userName: user.firstName
      });
      this.userDS.data = this.approverData
    }

    this.roleFormGroup.controls.selectUser.reset();
  }
}
