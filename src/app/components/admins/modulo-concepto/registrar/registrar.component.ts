import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConceptoService } from 'src/app/services/concepto.service';
import { Concepto } from 'src/app/models/concepto';
import Swal from 'sweetalert2';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';
declare let alertify:any;

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers:[ConceptoService]
})
export class RegistrarComponent implements OnInit {

  public ConceptoForm:FormGroup;
  public concepto:Concepto;

  constructor(
    private _formBuilder: FormBuilder,
    private _concepSV:ConceptoService
  ) {
    this.ConceptoForm = this._formBuilder.group({
      concepto: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ ]+'), Validators.maxLength(200)]]
    });
    
    this.concepto = new Concepto('',null);
    
   }

  ngOnInit(): void {
  }

  guardar(form){
    if(form.valid){
      FuncionesCompartidas.funcionesCompartidas(2500,'info','enviando información');
      this._concepSV.create(this.concepto).subscribe(res => {      
        FuncionesCompartidas.funcionesCompartidas(2500,'success',res)
        form.reset();
      },
      err => {
        if(err.status !== 0){
          FuncionesCompartidas.funcionesCompartidas(2500,'error',`${err.error.mensaje} o el concepto ya se encuentra registrado`);
        }
        else {
          FuncionesCompartidas.funcionesCompartidas(2500,'error','ha ocurrido un fallo de conexion')
        }
      })
    }
  }

}
