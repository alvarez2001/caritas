import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { ProyectosModel } from 'src/app/models/proyectos.model';
import { SolicitudModel } from 'src/app/models/solicitud-model';
import { Concepto } from 'src/app/models/concepto';
import Swal from 'sweetalert2';
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
  public proyectos:ProyectosModel[] = [];
  public solicitud: SolicitudModel;
  public conceptos:Concepto[] = [];
  public idUsuario:number;

  constructor(private _formBuilder: FormBuilder,
              private renderer:Renderer2,
              private logSV:LoginService,
              private solSV:SolicitudService) 
              {
                this.idUsuario = this.logSV.getIdentity().sub;
                this.validarFormularios(); 
                this.solicitud = new SolicitudModel(null,this.idUsuario,null,null,null,null,null,null,null,null,null,null,null,null)
              }

  ngOnInit() {
    this.recursosFormulario();
  }

  

  recursosFormulario(){
    const id = this.logSV.getIdentity().sub;
    this.solSV.getProyectoId(id).subscribe(res=> {
      this.proyectos = res.proyectos
    },
    err=> alert('error al cargar los proyectos del usuario'));

    this.solSV.getConcepto().subscribe(res => {
      this.conceptos = res.listado; 
    });
  }

  enviarFormulario(stepper){
    this.solSV.createSolicitud(this.solicitud).subscribe(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `${res.status}`,
        text:`su solicitud es la número ${res.solicitud}`,
        showConfirmButton: false,
        timer: 3000
      })

      stepper.reset();
    },
    err => alert('ha ocurrido un error'))
    
  }

  validarFormularios(){
    this.firstFormGroup = this._formBuilder.group({
      responsableProyecto: ['', [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+'), Validators.maxLength(200), Validators.minLength(1)]],
      idProyecto:['', Validators.required],
      conceptoId:['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      cantidad1: ['', [Validators.required, Validators.min(0), Validators.max(1000)]],
      producto1:['',[Validators.required, Validators.maxLength(200)]],
      cantidad2: ['', [ Validators.min(0), Validators.max(1000)]],
      producto2:['',[ Validators.maxLength(200)]],
      cantidad3: ['', [ Validators.min(0), Validators.max(1000)]],
      producto3:['',[ Validators.maxLength(200)]],
      cantidad4: ['', [ Validators.min(0), Validators.max(1000)]],
      producto4:['',[ Validators.maxLength(200)]],
      cantidad5: ['', [ Validators.min(0), Validators.max(1000)]],
      producto5:['',[ Validators.maxLength(200)]]
    });
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

}
