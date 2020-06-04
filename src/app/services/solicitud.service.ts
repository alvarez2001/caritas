import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitudModel } from '../models/solicitud-model';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  public url:string;
  constructor(
    private _http:HttpClient
  ) { 
    this.url = Global.url;
  }


  getProyectoId(id):Observable<any>{return this._http.get(`${this.url}proyecto/proyectoUsuario/${id}`)}

  getConcepto():Observable<any>{return this._http.get(`${this.url}concepto`)}

  createSolicitud(form):Observable<any>{
    const json = JSON.stringify(form);
    const params = 'json='+json;
    return this._http.post<SolicitudModel>(`${this.url}solicitud`, params);
  }

  getAllSolicitudes():Observable<any>{ return this._http.get(`${this.url}solicitud`) }

  registerMontoBanco(form, id):Observable<any>{
    const json = JSON.stringify(form);
    const params = 'json='+json;
    return this._http.put(`${this.url}solicitud/asignarmontobanco/${id}`,params);
  }

  getsoliPendientes():Observable<any>{ return this._http.get(`${this.url}solicitudes/pendiente`)}

  getSolicitudesRevisada():Observable<any>{ return this._http.get(`${this.url}solicitudes/revisada`)}

  postSolicitudRevisada(user, idActivo):Observable<any>{
    const json = JSON.stringify(user);
    const params = 'json='+json;
    return this._http.put(`${this.url}solicitud/autorizarsolicitud/${idActivo}`,params);
  }
}
