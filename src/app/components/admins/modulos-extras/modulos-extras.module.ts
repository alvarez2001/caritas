import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosExtrasRoutingModule } from './modulos-extras-routing.module';
import { ConceptoModule } from '../modulo-concepto/concepto.module';
import { BancosModule } from '../modulo-bancos/bancos.module';
import { VistaModuloExtrasComponent } from '../vistasModulo/vista-modulo-extras/vista-modulo-extras.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [VistaModuloExtrasComponent],
  imports: [
    CommonModule,
    ConceptoModule,
    BancosModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ModulosExtrasRoutingModule
  ]
})
export class ModulosExtrasModule { }
