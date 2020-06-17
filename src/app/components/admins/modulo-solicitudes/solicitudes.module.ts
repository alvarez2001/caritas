import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsignarMontoComponent } from './asignar-monto/asignar-monto.component';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { RevisionSolicitudComponent } from './revision-solicitud/revision-solicitud.component';
import { DetallerevSolicitudComponent } from './detallerev-solicitud/detallerev-solicitud.component';
import { CamposDetalleComponent } from './campos-detalle/campos-detalle.component';
import { SolicitudesDuoComponent } from './solicitudes-duo/solicitudes-duo.component';
import { ListarAutorizadasComponent } from './listar-autorizadas/listar-autorizadas.component';
import { VistaSolicitudesComponent } from '../vistasModulo/vista-solicitudes/vista-solicitudes.component';
import { ListarRechaAutoriComponent } from './listar-recha-autori/listar-recha-autori.component';
import { ListarSolAutorizadasComponent } from './listar-sol-autorizadas/listar-sol-autorizadas.component';
import { OneSolicitudComponent } from './one-solicitud/one-solicitud.component';
import { NuevaSolicitudComponent } from './nueva-solicitud/nueva-solicitud.component';


@NgModule({
  declarations: [AsignarMontoComponent, ListarSolicitudesComponent, RevisionSolicitudComponent, DetallerevSolicitudComponent, CamposDetalleComponent, SolicitudesDuoComponent, ListarAutorizadasComponent,VistaSolicitudesComponent, ListarRechaAutoriComponent, ListarSolAutorizadasComponent, OneSolicitudComponent, NuevaSolicitudComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }
