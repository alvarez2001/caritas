import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConceptoService } from 'src/app/services/concepto.service';
import { Concepto } from 'src/app/models/concepto';
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
    public dialogRef: MatDialogRef<RegistrarComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
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
    this._concepSV.create(this.concepto).subscribe(res => {
      alertify.notify('Concepto creado con exito', 'success', 3)
      this.dialogRef.close(true)  
    })
  }

}
