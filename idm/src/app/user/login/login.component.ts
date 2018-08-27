import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {

    this.loginFormGroup = this._formBuilder.group({
      employeeId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginFormGroup.valid) {
      this.authService.login(this.loginFormGroup.controls.employeeId.value, this.loginFormGroup.controls.password.value);
    }
  }
}
