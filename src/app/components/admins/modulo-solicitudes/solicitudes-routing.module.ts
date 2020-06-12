import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { RevisionSolicitudComponent } from './revision-solicitud/revision-solicitud.component';
import { SolicitudesDuoComponent } from './solicitudes-duo/solicitudes-duo.component';
import { ListarAutorizadasComponent } from './listar-autorizadas/listar-autorizadas.component';


const routes: Routes = [
  {
    path:'asignar-monto', component: ListarSolicitudesComponent
  },
  {
    path:'revision-solicitud',component:RevisionSolicitudComponent
  },
  {
    path:'solicitudes',component:SolicitudesDuoComponent
  },
  {
    path:'ejecucion',component:ListarAutorizadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
