import { Component } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { userInfo } from 'os';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent{
  UserInfo:UserDetails;
  UserAddr: UserAddress;
  
  constructor() {
    this.DisplayAddress = '1.Home';
    this.UserInfo = new UserDetails();
    this.UserAddr = new UserAddress();
    // Assign properties from UserInfo here
    this.UserFullName = this.UserInfo.FullName;
    this.EmailId = this.UserInfo.EmailId;
    this.Password = this.UserInfo.Password;
    this.MobileNumber = this.UserInfo.MobileNumber;
    this.Address = this.UserAddr.address;
    this.state = this.UserAddr.State;
    this.CityOrTown = this.UserAddr.CityOrTown;
    this.Address = this.UserAddr.address;
  }

  DisplayAddress: string;
  state:string = "TamilNadu";
  CityOrTown: string = "Chennai";

  Addresstype: string[] = ['1.Home', '2. Work', '3.Other'];
  Address:string;
  UserFullName:string;
  EmailId:string;
  Password: string;
  MobileNumber: string;
  disabledForm = true;
  disabledFormForAddress = true;

  OnEdit(){
    if (this.disabledForm == true){
      this.disabledForm = false;
    }
    else{
      this.disabledForm = true;
    }
  }

  OnEditForAddressForm(){
    if (this.disabledFormForAddress == true){
      this.disabledFormForAddress = false;
    }
    else{
      this.disabledFormForAddress = true;
    }
  }
}

// This data will be exported by UserTable
export class UserDetails{
  FullName: string;
  EmailId: string;
  Password: string;
  MobileNumber: string;
  /**
   *
   */

  // Setting Defaulters, if user !exist in the UsersTable
  constructor() {
    this.FullName = 'admin';
    this.EmailId = 'admin@bookstore.com';
    this.Password = 'admin';
    this.MobileNumber = '3456798098';
  }
}

export class UserAddress{
  address: string;
  CityOrTown: string;
  State: string;
  type:string;

  /**
   *
   */
  constructor() {
    this.address = 'SRMIST, KTR, Chennai, TamilNadu, Kattankulathur, 603203';
    this.CityOrTown = 'Chennai';
    this.State = 'TamilNadu';
    this.type = 'home';
  }
}
