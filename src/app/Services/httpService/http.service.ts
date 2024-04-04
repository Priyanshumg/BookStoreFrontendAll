import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  postService(url:string,reqData:any,token:boolean=false,httpOptions:any={}){
    return this.httpClient.post(url,reqData,token&&httpOptions)
  }

  postServiceToken(url:string,reqData:any,token:boolean=true,httpOptions:any={}){
    return this.httpClient.post(url,reqData,token&&httpOptions)
  }

  getService(url:string,token:boolean=true,httpOptions:any={}){
    return this.httpClient.get(url,token&&httpOptions)
  }

  putService(url:string,reqData:any,token:boolean=true,httpOptions:any={}){
    return this.httpClient.put(url,reqData,token&&httpOptions)
  }

}
