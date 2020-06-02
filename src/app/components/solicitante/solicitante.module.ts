import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitanteRoutingModule } from './solicitante-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderSoliComponent } from './header-soli/header-soli.component';
import { InicioComponent } from './inicio/inicio.component';
import { PanelSoliComponent } from './panel-soli/panel-soli.component';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { RegistrarSolicitudComponent } from './registrar-solicitud/registrar-solicitud.component';


@NgModule({
  declarations: [
    InicioComponent,
    HeaderSoliComponent,
    PanelSoliComponent,
    ListarSolicitudesComponent,
    RegistrarSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitanteRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SolicitanteModule { }
