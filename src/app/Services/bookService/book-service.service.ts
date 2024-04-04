import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token:any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  getAllbooks(){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization' :'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44382/api/Book/GetAllBooks',true,header)
  }
  sortBookInAcSC(){
    let header ={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44382/api/Book/SortBypriceASC',true,header)
  }
  sortBookInDSC(){
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44382/api/Book/SortBypriceDSC',true,header)
  }

  newestArrival(){
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44382/api/Book/sortByArrivalASC',true,header)
  }

  GetbyId(reqData:number){
    console.log(reqData);
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44382/api/Book/GetById?id='+reqData,true,header)
  }



}
