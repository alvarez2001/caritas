import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string;
  public identity;
  public token:string;

  constructor(
    public _http:HttpClient
  ) { 
    this.url = Global.url;
  }


  loginUser(user, getToken = null):Observable<any>{
    if(getToken != null){
      user.getToken = 'true'
    }
    const json = JSON.stringify(user);
    const params = 'json='+json;
    return this._http.post(this.url+'login', params)
  }

  getIdentity(){
    const identity = JSON.parse(sessionStorage.getItem('identity'))
    if(identity){
      this.identity = identity;
    }else{
      this.identity = null;
    }
    return this.identity;
  }

  getToken(){
    const token = sessionStorage.getItem('token');

    if(token){
      this.token = token;
    }
    else{
      this.token = null;
    }
    return this.token;
    
  }

}
