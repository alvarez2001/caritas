import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaModuloProyectosComponent } from '../vistasModulo/vista-modulo-proyectos/vista-modulo-proyectos.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { ListarProyectosComponent } from './listar-proyectos/listar-proyectos.component';


const routes: Routes = [
  {
    path:'',component:VistaModuloProyectosComponent
  },
  {
    path: 'crear-proyecto', component:CrearProyectoComponent, data: { breadcrumb: 'Crear Proyecto'}
  },
  {
    path: 'listar-proyectos', component:ListarProyectosComponent, data: { breadcrumb: 'Listar Proyectos'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRoutingModule { }
