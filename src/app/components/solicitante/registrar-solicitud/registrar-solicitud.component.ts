import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, RequiredValidator } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { ProyectosModel } from 'src/app/models/proyectos.model';
import { SolicitudModel } from 'src/app/models/solicitud-model';
import { Concepto } from 'src/app/models/concepto';
import Swal from 'sweetalert2';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';
import { SolicitudNuevaModel, ProductosNuevos } from 'src/app/models/modelos/solicitudNueva.model';
declare let alertify:any;


@Component({
  selector: 'app-registrar-solicitud',
  templateUrl: './registrar-solicitud.component.html',
  styleUrls: ['./registrar-solicitud.component.css'],
  providers:[LoginService,SolicitudService]
})
export class RegistrarSolicitudComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirtyFormGroup: FormGroup;


  
  public proyectos:ProyectosModel[] = [];
  public solicitud: SolicitudNuevaModel;
  public conceptos:Concepto[] = [];
  public idUsuario:number;

  public productoSolicitud = null;
  public cantidadSolicitud = null;

  public arrayProductos = [];

  constructor(private _formBuilder: FormBuilder,
              private renderer:Renderer2,
              private logSV:LoginService,
              private solSV:SolicitudService) 
              {
                
                this.idUsuario = this.logSV.getIdentity().id;
                this.validarFormularios(); 
                this.solicitud = new SolicitudNuevaModel(null,this.idUsuario,null,null,null,this.arrayProductos)
              }

  ngOnInit() {
    this.recursosFormulario();
    this.comprobar();
  }

  

  recursosFormulario(){
    const id = this.logSV.getIdentity().id;
    
    this.solSV.getProyectoId(id).subscribe(res=> {
      this.proyectos = res
    },
    err=> {
      FuncionesCompartidas.funcionesCompartidas(2500,'error','ha ocurrido un error inesperado');
    });

    this.solSV.getConcepto().subscribe(res => {
      this.conceptos = res; 
    }, err => {
      FuncionesCompartidas.funcionesCompartidas(2500,'error','ha ocurrido un error inesperado');
    });
  }

  enviarFormulario(stepper){
    this.solSV.createSolicitud(this.solicitud).subscribe(res => {
      FuncionesCompartidas.funcionesCompartidas(8000,'success',`${res.mensaje} #${res.informacion.id}`, true)
      this.arrayProductos = [];
      stepper.reset();
    },
    err => {
      console.log(err);
      FuncionesCompartidas.funcionesCompartidas(8000,'error','ha ocurrido un error inesperado', true)
    })
    
  }

  validarFormularios(){
    this.firstFormGroup = this._formBuilder.group({
      responsableProyecto: ['', [Validators.required,Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+'), Validators.maxLength(200), Validators.minLength(1)]],
      idProyecto:['', Validators.required],
      conceptoId:['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      producto:[''],
      cantidad:['']
    });

    this.thirtyFormGroup = this._formBuilder.group({
      descripcion:['',[Validators.required]]
    })
  }


  getErrorMessage(campo, ErrorRequired, patternError='', maxError='') {
    let msj:string;


    if (campo.hasError('required')) {
      msj = ErrorRequired;
    }
    if(campo.hasError('pattern')){
      msj = patternError;
    }
    if(campo.hasError('max')){
      msj = maxError
    }
    return msj;
  }


  agregarOperacion(){
    if(this.cantidadSolicitud !== '' && this.productoSolicitud !== null){
      const productos:ProductosNuevos = {
        cantidad:this.cantidadSolicitud, 
        descripcion:this.productoSolicitud
      }
      
      this.arrayProductos.push(productos)
      console.log(this.arrayProductos);
  
      this.cantidadSolicitud = null;
      this.productoSolicitud = null;
    }
  }

  borrarOperacion(index){
    this.arrayProductos.splice(index,1);
    console.log(this.arrayProductos);

  }

  public comprobar(){
    let statusArray ;
    if(this.arrayProductos.length < 1){
      statusArray = true;
    }
    else{
      statusArray = false;
    }

    return statusArray;
  }
  
}

