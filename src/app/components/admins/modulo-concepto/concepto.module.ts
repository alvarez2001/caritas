import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptoRoutingModule } from './concepto-routing.module';
import { RegistrarComponent } from './registrar/registrar.component';
import { VerComponent } from './ver/ver.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistrarComponent, VerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ConceptoRoutingModule
  ]
})
export class ConceptoModule { }
