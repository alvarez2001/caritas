import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { PanelAdministrativoComponent } from './panel-administrativo/panel-administrativo.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosModule } from './modulo-usuarios/usuarios.module';
import { ProyectoModule } from './modulo-proyectos/proyecto.module';
import { ConceptoModule } from './modulo-concepto/concepto.module';
import { BancosModule } from './modulo-bancos/bancos.module';
import { SolicitudesModule } from './modulo-solicitudes/solicitudes.module';


@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    AdministradorComponent,
    PanelAdministrativoComponent,
    MenuHeaderComponent
  ],
  imports: [
    CommonModule,
    UsuariosModule,
    ProyectoModule,
    ConceptoModule,
    BancosModule,
    SolicitudesModule,
    MasterRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule    
  ]
})
export class MasterModule { }
