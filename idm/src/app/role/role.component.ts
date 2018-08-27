import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roleFormGroup: FormGroup;
  users$: Observable<any[]>;
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.roleFormGroup = this._formBuilder.group({
      roleName: ['', Validators.required],
      roleOwner: ['', Validators.required],
      roleDescription: ['', Validators.required],
      selectUser: ''
    });
  }

  onSubmit(roleStepperRef) {

  }
}
