import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Concepto } from '../models/concepto';
import { Banco } from '../models/banco.model';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

  public url:string;
  
  constructor(private _http:HttpClient) { 
    this.url = Global.url;
  }
  getAll():Observable<any>{return this._http.get(`${this.url}concepto`)}

  create(concepto):Observable<Concepto>{
    const json = JSON.stringify(concepto);
    const params = 'json='+json;
    return this._http.post<Concepto>(`${this.url}concepto`, params);
  }
  
  delete(id):Observable<any>{
    return this._http.delete(`${this.url}concepto/${id}`);   
  }

  createBanco(banco:Banco):Observable<Banco>{
    const json = JSON.stringify(banco);
    const params = 'json='+json;
    return this._http.post<Banco>(`${this.url}banco`, params);
  }

  getAllBanco():Observable<Banco[]>{ return this._http.get<Banco[]>(`${this.url}banco`)}

  deleteBanco(id):Observable<any>{
    return this._http.delete(`${this.url}banco/${id}`)
  }
}
