import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { Login } from '../../Components/UserAuth/login-sign-up/login-sign-up.component';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: any;
  constructor(private httpService: HttpService) {}

  onLogin(reqData: any): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
    return this.httpService.postService('https://localhost:44349/api/User/Login', reqData, false, header);
  }
  onSignUp(reqData: any): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
    return this.httpService.postService('https://localhost:44349/api/User/RegisterUser', reqData, false, header);
  }
  forgetPassword(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/'
      })
    }
    return this.httpService.postService('https://localhost:44382/api/User/ForgetPassword?Email='+reqData.Email,{},false,header)
  }
}
