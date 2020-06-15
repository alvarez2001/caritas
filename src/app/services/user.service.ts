import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url:string;
  constructor(
    public _http:HttpClient
  ) { 

    this.url = Global.url
  }

  comprobarEmail(email):Observable<any>{
    const json = JSON.stringify(email);
    const params = 'json='+json;
    return this._http.post(this.url+'validarEmail', params  )
  }

  actualizarUsuario(user, userId):Observable<any>{
    const json = JSON.stringify(user);
    const params = 'json='+json;
    return this._http.put(`${this.url}users/${userId}`, params )
  }

  mostrarUsuarios():Observable<any>{ return this._http.get(this.url+'users' ) }

  registrarUser(user):Observable<any>{
    const json = JSON.stringify(user);
    const params = 'json='+json;
    return this._http.post(`${this.url}users`,params )
  }

  deleteUser(id):Observable<any>{ return this._http.delete(`${this.url}users/${id}` ) }


  

}
