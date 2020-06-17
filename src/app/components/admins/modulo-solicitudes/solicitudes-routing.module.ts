import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { RevisionSolicitudComponent } from './revision-solicitud/revision-solicitud.component';
import { SolicitudesDuoComponent } from './solicitudes-duo/solicitudes-duo.component';
import { ListarAutorizadasComponent } from './listar-autorizadas/listar-autorizadas.component';
import { VistaSolicitudesComponent } from '../vistasModulo/vista-solicitudes/vista-solicitudes.component';
import { CamposDetalleComponent } from './campos-detalle/campos-detalle.component';
import { DetallerevSolicitudComponent } from './detallerev-solicitud/detallerev-solicitud.component';
import { ListarRechaAutoriComponent } from './listar-recha-autori/listar-recha-autori.component';
import { ListarSolAutorizadasComponent } from './listar-sol-autorizadas/listar-sol-autorizadas.component';
import { OneSolicitudComponent } from './one-solicitud/one-solicitud.component';
import { NuevaSolicitudComponent } from './nueva-solicitud/nueva-solicitud.component';


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
    path:'ejecucion',component:ListarAutorizadasComponent, data:{ breadcrumb: 'Ejecución'}
  },
  {
    path:'ejecucion/:id',component:SolicitudesDuoComponent,data : {breadcrumb : 'Ejecución de solicitud'}
  },
  {
    path:'solicitudes/rechazadas',component:ListarRechaAutoriComponent, data:{breadcrumb:'Solicitudes Rechazadas'}
  },
  {
    path:'solicitudes/finalizadas',component:ListarSolAutorizadasComponent, data:{breadcrumb:'Solicitudes Autorizadas'}
  },
  {
    path:'solicitudes/rechazadas/:id', component:OneSolicitudComponent,data:{breadcrumb:'Detalle Solicitud'}
  },
  {
    path:'solicitudes/finalizadas/:id', component:OneSolicitudComponent,data:{breadcrumb:'Detalle Solicitud'}
  },
  {
    path:'nueva-solicitud', component:NuevaSolicitudComponent, data:{breadcrumb:'Nueva Solicitud'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
