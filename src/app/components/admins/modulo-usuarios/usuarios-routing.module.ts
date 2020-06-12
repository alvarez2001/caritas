import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaModuloComponent } from '../vistasModulo/vista-modulo/vista-modulo.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';


const routes: Routes = [
  {
    path:'',component:VistaModuloComponent
  },
  {
    path: 'usuarios', component:CrearUsuarioComponent, data: { breadcrumb: 'Crear Usuario'}
  },
  {
    path: 'listar-usuarios', component:ListarUsuarioComponent, data: { breadcrumb: 'Listar Usuarios'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
