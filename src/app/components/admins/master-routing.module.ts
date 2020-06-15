import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelAdministrativoComponent } from './panel-administrativo/panel-administrativo.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { RoleGuard } from 'src/app/guards/role.guard';
import { RouterListComponent } from './router-list/router-list.component';


const routes: Routes = [
  {
    path: 'panel-administrativo',component: PanelAdministrativoComponent ,data: { breadcrumb: 'Inicio'},
    children:[
      {path: '', component:AdministradorComponent },
      
      {path: 'inicio', component:AdministradorComponent },
      {
        path: 'modulo-usuarios', data: { breadcrumb: 'Modulo Usuarios'},
        component:RouterListComponent,
        loadChildren:() => import('src/app/components/admins/modulo-usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
      {
        path:'modulo-proyectos' ,data:{ breadcrumb: 'Modulo Proyectos'},
        component:RouterListComponent,
        loadChildren:() => import('src/app/components/admins/modulo-proyectos/proyecto.module').then(m => m.ProyectoModule)

      },
      {
        path:'modulos-extras',data: { breadcrumb: 'Modulos Extras'} ,
        component:RouterListComponent,
        loadChildren: () => import('src/app/components/admins/modulos-extras/modulos-extras.module').then(m => m.ModulosExtrasModule)
      },
      {
        path:'modulo-solicitudes',data:{breadcrumb : 'Modulo Solicitudes'},
        component:RouterListComponent,
        loadChildren:() => import('src/app/components/admins/modulo-solicitudes/solicitudes.module').then(m => m.SolicitudesModule)

      }
    ],canActivate:[/*RoleGuard*/]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
