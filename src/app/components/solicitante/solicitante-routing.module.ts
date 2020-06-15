import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PanelSoliComponent } from './panel-soli/panel-soli.component';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { RegistrarSolicitudComponent } from './registrar-solicitud/registrar-solicitud.component';
import { RoleGuard } from 'src/app/guards/role.guard';


const routes: Routes = [
  {path:'solicitante', component:InicioComponent,children:[
    {path:'', component:PanelSoliComponent},
    {path:'listar-solicitudes', component:ListarSolicitudesComponent},
    {path:'registrar-solicitud', component:RegistrarSolicitudComponent}
  ],canActivate:[RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitanteRoutingModule { }
