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

  getSolicitudUsuario(id):Observable<any>{return this._http.get(`${this.url}solicitud/solicitante/${id}`)}

  getProyectoId(id):Observable<any>{return this._http.get(`${this.url}proyecto/solicitante/${id}`)}

  getConcepto():Observable<any>{return this._http.get(`${this.url}conceptos`)}

  createSolicitud(form):Observable<any>{
    const json = JSON.stringify(form);
    const params = 'json='+json;
    return this._http.post<SolicitudModel>(`${this.url}solicitudes`, params);
  }

  getAllSolicitudes():Observable<any>{ return this._http.get(`${this.url}solicitud`) }

  registerMontoBanco(data, id):Observable<any>{
    const json = JSON.stringify(data);
    const params = 'json='+json;
    return this._http.put(`${this.url}solicitud/${id}`,params);
  }

  getsoliPendientes():Observable<any>{ return this._http.get(`${this.url}solicitud/pendientes`)}

  getSolicitudesRevisada():Observable<any>{ return this._http.get(`${this.url}solicitud/revisada`)}

  getSolicitudRevision():Observable<any> { return this._http.get(`${this.url}solicitud/solicitudes`) }

  getSolicitudAutorizadas():Observable<any>{return this._http.get(`${this.url}solicitud/autorizadas`)}

  getSolicitudRechazadas():Observable<any>{return this._http.get(`${this.url}solicitud/anuladas`)}

  getOneSolicitud(id):Observable<any>{ return this._http.get(`${this.url}solicitudes/${id}`)}

  postSolicitudRevisada(user, idActivo):Observable<any>{
    const json = JSON.stringify(user);
    const params = 'json='+json;
    return this._http.put(`${this.url}solicitud/autorizarsolicitud/${idActivo}`,params);
  }

  anularSolicitud(datos,id):Observable<any>{
    const json = JSON.stringify(datos);
    const params = 'json='+json;
    return this._http.put(`${this.url}solicitud/anular/${id}`, params)
  }

  autorizarSolicitud(datos,id):Observable<any>{
    const json = JSON.stringify(datos);
    const params = 'json='+json;
    return this._http.put(`${this.url}solicitud/autorizar/${id}`, params)
  }

  RechazarSolicitud(user,id):Observable<any>{
    const json = JSON.stringify(user);
    const params = 'json='+json;
    return this._http.put(`${this.url}solicitud/rechazarsolicitud/${id}`,params);
  }
}
