import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancosRoutingModule } from './bancos-routing.module';
import { ListarBancosComponent } from './listar-bancos/listar-bancos.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearBancoComponent } from './crear-banco/crear-banco.component';
import { DetalleBancoComponent } from './detalle-banco/detalle-banco.component';


@NgModule({
  declarations: [ListarBancosComponent, CrearBancoComponent, DetalleBancoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BancosRoutingModule
  ]
})
export class BancosModule { }
