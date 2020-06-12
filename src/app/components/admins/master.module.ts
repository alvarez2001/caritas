import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { PanelAdministrativoComponent } from './panel-administrativo/panel-administrativo.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosModule } from './modulo-usuarios/usuarios.module';
import { ProyectoModule } from './modulo-proyectos/proyecto.module';
import { SolicitudesModule } from './modulo-solicitudes/solicitudes.module';
import {BreadcrumbModule} from 'angular-crumbs';
import { VistaModuloExtrasComponent } from './vistasModulo/vista-modulo-extras/vista-modulo-extras.component';
import { ModulosExtrasModule } from './modulos-extras/modulos-extras.module';
import { UsuariosRoutingModule } from './modulo-usuarios/usuarios-routing.module';
import { ProyectoRoutingModule } from './modulo-proyectos/proyecto-routing.module';
import { ModulosExtrasRoutingModule } from './modulos-extras/modulos-extras-routing.module';
import { SolicitudesRoutingModule } from './modulo-solicitudes/solicitudes-routing.module';



@NgModule({
  declarations: [
    PanelAdministrativoComponent,
    AdministradorComponent,
    FooterComponent,
    MenuComponent,
    
  ],
  imports: [
    CommonModule,  
    BreadcrumbModule,
    MasterRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
        
  ],
  exports:[
    BreadcrumbModule
  ]
})
export class MasterModule { }
