import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelAdministrativoComponent } from './panel-administrativo/panel-administrativo.component';
import { IdentityGuard } from 'src/app/guards/identity.guard';
import { AdministradorComponent } from './administrador/administrador.component';

import { CrearUsuarioComponent } from './modulo-usuarios/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './modulo-usuarios/listar-usuario/listar-usuario.component';
import { CrearProyectoComponent } from './modulo-proyectos/crear-proyecto/crear-proyecto.component';
import { ListarProyectosComponent } from './modulo-proyectos/listar-proyectos/listar-proyectos.component';
import { RegistrarComponent } from './modulo-concepto/registrar/registrar.component';
import { VerComponent } from './modulo-concepto/ver/ver.component';
import { ListarBancosComponent } from './modulo-bancos/listar-bancos/listar-bancos.component';


const routes: Routes = [
  {
    path: 'panel-administrativo/master',component: PanelAdministrativoComponent,
    children:[
       {path: '', component:AdministradorComponent},
      {path: 'inicio', component:AdministradorComponent},
      {
        path: 'usuarios', component:CrearUsuarioComponent
      },
      {
        path: 'listar-usuarios', component:ListarUsuarioComponent
      },
      {
        path: 'crear-proyecto', component:CrearProyectoComponent
      },
      {
        path: 'listar-proyectos', component:ListarProyectosComponent
      },
      {
        path:'listar-concepto', component:VerComponent
      },
      {
        path:'listar-bancos', component:ListarBancosComponent
      }
    ],canActivate:[IdentityGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
