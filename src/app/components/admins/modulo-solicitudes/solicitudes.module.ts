import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsignarMontoComponent } from './asignar-monto/asignar-monto.component';


@NgModule({
  declarations: [AsignarMontoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }
