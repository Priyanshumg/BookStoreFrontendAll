import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../Services/UserService/user.service'
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnInit{
  ForgotForms!:FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder,private userService:UserService){}
  ngOnInit(): void {
      this.ForgotForms = this.formBuilder.group(
    {
      Email:['',[Validators.required,Validators.email]],
    }
      )
  }
  ForgetOnSubmit(){
    console.log("submit button triggered");
    this.submitted=true;
    let reqData={
      Email:this.ForgotForms.value.Email,
    }
    this.userService.forgetPassword(reqData).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
