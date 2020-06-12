import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { ListarProyectosComponent } from './listar-proyectos/listar-proyectos.component';
import { ModificarProyectoComponent } from './modificar-proyecto/modificar-proyecto.component';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';
import { DetalleCrearProyectoComponent } from './detalle-crear-proyecto/detalle-crear-proyecto.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VistaModuloProyectosComponent } from '../vistasModulo/vista-modulo-proyectos/vista-modulo-proyectos.component';


@NgModule({
  declarations: [
    CrearProyectoComponent,
    ListarProyectosComponent,
    ModificarProyectoComponent,
    DetalleProyectoComponent,
    DetalleCrearProyectoComponent,
    VistaModuloProyectosComponent
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    DetalleProyectoComponent,
    ModificarProyectoComponent,
    DetalleCrearProyectoComponent
  ]
})
export class ProyectoModule { }
