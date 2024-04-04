import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../Services/UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.scss'],
})
export class LoginSignUPComponent {
  LoginForm!: FormGroup;
  LoginObj: Login;
  RegisterObj: Register;

  constructor(private formbuilder: FormBuilder, private userService: UserService, private route: Router) {
    this.LoginObj = new Login();
    this.RegisterObj = new Register();
  }

  onSubmit() {
    console.log(this.LoginObj);
    this.userService.onLogin(this.LoginObj).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem("token",response.data);
      this.route.navigateByUrl("/home");
    })}

  onSignUp() {
    console.log(this.RegisterObj);
    this.userService.onSignUp(this.RegisterObj).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem("token",response.data);
      this.route.navigateByUrl("/home");
    })}
}


export class Login {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}

export class Register {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;

  constructor() {
    this.fullName = '';
    this.email = '';
    this.password = '';
    this.phoneNumber = '';
  }
}
