import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ConceptoService } from 'src/app/services/concepto.service';
import { LoginService } from 'src/app/services/login.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import Swal from 'sweetalert2';
import { ProductosModel } from 'src/app/models/productos.model';

@Component({
  selector: 'app-asignar-monto',
  templateUrl: './asignar-monto.component.html',
  styleUrls: ['./asignar-monto.component.css'],
  providers:[ConceptoService,LoginService, SolicitudService]
})
export class AsignarMontoComponent implements OnInit {

  public asignacion:FormGroup;
  public allBancos:Array<any>;
  private idAdmin:number;
  public TotalEnvio:number;
  private productos:ProductosModel;
  
  private total1:number = 0;
  private total2:number = 0;
  private total3:number = 0;
  private total4:number = 0;
  private total5:number = 0;


  constructor( public dialogRef: MatDialogRef<AsignarMontoComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _formBuilder: FormBuilder,
    private concepSV:ConceptoService,
    private logSV:LoginService,
    private solSV:SolicitudService
    ) { 
      this.idAdmin = this.logSV.getIdentity().sub
      this.productos = new ProductosModel(this.idAdmin,null,null,null,null,null,null,null,null,null,null)
    }

  ngOnInit(): void {
    this.validacion();
    this.bancos();
    this.validacionVacio()
    
  }



  multiplicardor(precio, cantidad, numero){
    switch (numero){
        case 1:
          this.total1 = cantidad * precio.value;
          break;
        case 2:
          this.total2 = cantidad * precio.value;
          break;
        case 3:
          this.total3 = cantidad * precio.value;
          break;
        case 4: 
          this.total4 = cantidad * precio.value;
          break;
        case 5:
          this.total5 = cantidad * precio.value;
          break;
    }
    
  }

  bancos(){
    this.concepSV.getAllBanco().subscribe(res => {
      this.allBancos = res;
      
    })
  }

  enviarDatos(form, id){
    console.log(this.productos);
    this.solSV.registerMontoBanco(this.productos, id).subscribe(res => {
      Swal.fire({
        toast:true,
        timer:5000,
        timerProgressBar:true,
        title:'Asignacion completada',
        icon:'success',
        position:'bottom-end'
      })
      this.dialogRef.close(true);
    });
  }

  validacionVacio(){
    const precio1 = this.asignacion.get('precio1');
    const precio2 = this.asignacion.get('precio2');
    const precio3 = this.asignacion.get('precio3');
    const precio4 = this.asignacion.get('precio4');
    const precio5 = this.asignacion.get('precio5');
    const banco1_id = this.asignacion.get('banco1_id');
    const banco2_id = this.asignacion.get('banco2_id');
    const banco3_id = this.asignacion.get('banco3_id');
    const banco4_id = this.asignacion.get('banco4_id');
    const banco5_id = this.asignacion.get('banco5_id');


    if(this.data.rubro.cantidad1 !== null ){
      precio1.setValidators([Validators.required]);
      banco1_id.setValidators([Validators.required]);
    }
    if(this.data.rubro.cantidad2 !== null ){
      precio2.setValidators([Validators.required]);
      banco2_id.setValidators([Validators.required]);
    }
    if(this.data.rubro.cantidad3 !== null ){
      precio3.setValidators([Validators.required]);
      banco3_id.setValidators([Validators.required]);
    }
    if(this.data.rubro.cantidad4 !== null ){
      precio4.setValidators([Validators.required]);
      banco4_id.setValidators([Validators.required]);
    }
    if(this.data.rubro.cantidad5 !== null ){
      precio5.setValidators([Validators.required]);
      banco5_id.setValidators([Validators.required]);
    }

  }

  validacion(){
    this.asignacion = this._formBuilder.group({
      cantidad1:[this.data.rubro.cantidad1],
      descripcion1:[this.data.rubro.descripcion1],
      cantidad2:[this.data.rubro.cantidad2],
      descripcion2:[this.data.rubro.descripcion2],
      cantidad3:[this.data.rubro.cantidad3],
      descripcion3:[this.data.rubro.descripcion3],
      cantidad4:[this.data.rubro.cantidad4],
      descripcion4:[this.data.rubro.descripcion4],
      cantidad5:[this.data.rubro.cantidad5],
      descripcion5:[this.data.rubro.descripcion5],
      admin:[this.idAdmin,[Validators.required]],
      precio1: [null, [Validators.required,Validators.min(1),Validators.minLength(1)]],
      banco1_id:[null, [Validators.required]],
      precio2: [null, [Validators.min(1),Validators.minLength(1)]],
      banco2_id:[null, []],
      precio3: [null, [Validators.min(1),Validators.minLength(1)]],
      banco3_id:[null, []],
      precio4: [null, [Validators.min(1),Validators.minLength(1)]],
      banco4_id:[null, []],
      precio5: [null, [Validators.min(1),Validators.minLength(1)]],
      banco5_id:[null, []]
    });
  }

}
