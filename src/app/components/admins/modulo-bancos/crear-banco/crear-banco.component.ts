import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Banco } from 'src/app/models/banco.model';
import { ConceptoService } from 'src/app/services/concepto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-banco',
  templateUrl: './crear-banco.component.html',
  styleUrls: ['./crear-banco.component.css'],
  providers:[ConceptoService]
})
export class CrearBancoComponent implements OnInit {
  


  public banco:Banco

  public formBanco:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CrearBancoComponent>,
    private _formBuilder:FormBuilder,
    private _conSV:ConceptoService
    ) { 
      this.validacionFormulario();
      this.banco = new Banco(null,null,null,null)
    }
  

  ngOnInit(): void {
  }

  formularioRegistro(form){
    this._conSV.createBanco(this.banco).subscribe(res => {
      Swal.fire({
        toast:true,
        timer:5000,
        position: 'bottom-end',
        timerProgressBar:true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        icon:'success',
        title: 'Registro Exitoso'
      })
      this.dialogRef.close(true);
    });
  }

  validacionFormulario(){
    this.formBanco = this._formBuilder.group({
      cedula:['',[Validators.required, Validators.pattern('[VJE][0-9]+')]],
      banco:['', [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+')]],
      titular:['', [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+')]],
      cuenta:['', [Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(20),Validators.minLength(20)]]
    })
  }

}
