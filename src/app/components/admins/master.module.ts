import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { PanelAdministrativoComponent } from './panel-administrativo/panel-administrativo.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BreadcrumbModule} from 'angular-crumbs';
import { RouterListComponent } from './router-list/router-list.component';







@NgModule({
  declarations: [
    
    PanelAdministrativoComponent,
    AdministradorComponent,
    RouterListComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,  
    BreadcrumbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MasterRoutingModule
        
  ],
  exports:[
    BreadcrumbModule
  ]
})
export class MasterModule { }
