import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaModuloExtrasComponent } from '../vistasModulo/vista-modulo-extras/vista-modulo-extras.component';
import { RegistrarComponent } from '../modulo-concepto/registrar/registrar.component';
import { VerComponent } from '../modulo-concepto/ver/ver.component';
import { CrearBancoComponent } from '../modulo-bancos/crear-banco/crear-banco.component';
import { ListarBancosComponent } from '../modulo-bancos/listar-bancos/listar-bancos.component';


const routes: Routes = [
  {
    path:'',component:VistaModuloExtrasComponent
  },
  {
    path:'crear-concepto',component:RegistrarComponent, data: { breadcrumb : 'Crear Concepto'}
  },
  {
    path:'listar-conceptos', component:VerComponent, data: { breadcrumb: 'Listar Conceptos'}
  },
  {
    path:'crear-banco', component:CrearBancoComponent, data: { breadcrumb: 'Crear Banco'}
  },
  {
    path:'listar-bancos', component:ListarBancosComponent, data: { breadcrumb: 'Listar Bancos'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosExtrasRoutingModule { }
