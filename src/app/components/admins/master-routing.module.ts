import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelAdministrativoComponent } from './panel-administrativo/panel-administrativo.component';
import { IdentityGuard } from 'src/app/guards/identity.guard';
import { AdministradorComponent } from './administrador/administrador.component';

const routes: Routes = [
  {
    path: 'panel-administrativo',component: PanelAdministrativoComponent ,data: { breadcrumb: 'Inicio'},
    children:[
      {path: '', component:AdministradorComponent },
      
      {path: 'inicio', component:AdministradorComponent },
      {
        path: 'modulo-usuarios', data: { breadcrumb: 'Modulo Usuarios'},
        loadChildren:'./modulo-usuarios/usuarios.module#UsuariosModule'
      },
      {
        path:'modulo-proyectos' ,data:{ breadcrumb: 'Modulo Proyectos'},
        loadChildren:'./modulo-proyectos/proyecto.module#ProyectoModule'

      },
      {
        path:'modulos-extras',data: { breadcrumb: 'Modulos Extras'} ,
        loadChildren:'./modulos-extras/modulos-extras.module#ModulosExtrasModule'
      },
      {
        path:'modulo-solicitudes',data:{breadcrumb : 'Modulo Solicitudes'},
        loadChildren:'./modulo-solicitudes/solicitudes.module#SolicitudesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
