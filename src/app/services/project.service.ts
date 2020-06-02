import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProyectosModel } from '../models/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url:string;
  
  constructor(
    private _http:HttpClient,
    ) { 
      this.url = Global.url;
    }

    getAll():Observable<ProyectosModel[]>{return this._http.get<ProyectosModel[]>(`${this.url}proyecto`)}

    getAllAdmins():Observable<any>{ return this._http.get(`${this.url}usuarios/admin` )}

    getAllSolicitantes():Observable<any>{return this._http.get(`${this.url}usuarios/solicitante`)}

    crearProyecto(project):Observable<any>{
      const json = JSON.stringify(project);
      const params = 'json='+json;
      return this._http.post(`${this.url}proyecto`, params);
    }

    putProject(project):Observable<any>{
      const json = JSON.stringify(project);
      const params = 'json='+json;
      return this._http.put(`${this.url}proyecto/${project.id}`, params)
    }

}
