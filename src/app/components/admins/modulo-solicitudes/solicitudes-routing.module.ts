import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { RevisionSolicitudComponent } from './revision-solicitud/revision-solicitud.component';
import { SolicitudesDuoComponent } from './solicitudes-duo/solicitudes-duo.component';
import { ListarAutorizadasComponent } from './listar-autorizadas/listar-autorizadas.component';
import { VistaSolicitudesComponent } from '../vistasModulo/vista-solicitudes/vista-solicitudes.component';
import { CamposDetalleComponent } from './campos-detalle/campos-detalle.component';
import { DetallerevSolicitudComponent } from './detallerev-solicitud/detallerev-solicitud.component';


const routes: Routes = [
  {
    path:'', component: VistaSolicitudesComponent
  },
  {
    path:'asignar-monto', component: ListarSolicitudesComponent, data:{ breadcrumb: 'Asignación'},
  },
  {
    path:'asignar-monto/:id',component:CamposDetalleComponent, data:{breadcrumb: 'Detalle Solicitud'}
  },
  {
    path:'revision-solicitud',component:RevisionSolicitudComponent, data:{ breadcrumb: 'Revisión'}
  },
  {
    path:'revision-solicitud/:id', component:DetallerevSolicitudComponent, data:{breadcrumb:'Detalle Solicitud revisión'}
  },
  {
    path:'solicitudes',component:SolicitudesDuoComponent, data:{ breadcrumb: 'Asignación'}
  },
  {
    path:'ejecucion',component:ListarAutorizadasComponent, data:{ breadcrumb: 'Ejecución'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
