import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { RoleService } from './role.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roleFormGroup: FormGroup;
  users$: Observable<User[]>;
  private searchTerm = new Subject<string>();

  userColumn: string[] = [
    'employeeId', 'userName'
  ];
  
  constructor(private _formBuilder: FormBuilder, private roleService: RoleService, private userService: UserService) { }

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
}
