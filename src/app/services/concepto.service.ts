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
  getAll():Observable<any>{return this._http.get(`${this.url}conceptos`)}

  create(concepto):Observable<Concepto>{
    const json = JSON.stringify(concepto);
    const params = 'json='+json;
    return this._http.post<Concepto>(`${this.url}conceptos`, params);
  }
  
  delete(id):Observable<any>{
    return this._http.delete(`${this.url}conceptos/${id}`);   
  }

  createBanco(banco:Banco):Observable<any>{
    const json = JSON.stringify(banco);
    const params = 'json='+json;
    return this._http.post<Banco>(`${this.url}bancos`, params);
  }

  getAllBanco():Observable<any>{ return this._http.get<Banco[]>(`${this.url}bancos`)}

  deleteBanco(id):Observable<any>{
    return this._http.delete(`${this.url}bancos/${id}`)
  }
}
