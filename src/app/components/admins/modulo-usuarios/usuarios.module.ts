import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VistaModuloComponent } from '../vistasModulo/vista-modulo/vista-modulo.component';



@NgModule({
  declarations: [
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    ModificarUsuarioComponent,
    DetalleUsuarioComponent,
    VistaModuloComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    ModificarUsuarioComponent,
    DetalleUsuarioComponent,
  ]
})
export class UsuariosModule { }
