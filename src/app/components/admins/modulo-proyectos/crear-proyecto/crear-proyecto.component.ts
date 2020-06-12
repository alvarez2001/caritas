import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProyectosModel } from 'src/app/models/proyectos.model';
import { ProjectService } from 'src/app/services/project.service';
import { UserModel } from 'src/app/models/user.model';
import {MatDialog} from '@angular/material/dialog';
import { DetalleCrearProyectoComponent } from '../detalle-crear-proyecto/detalle-crear-proyecto.component';


@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css'],
  providers:[ProjectService]
})
export class CrearProyectoComponent implements OnInit {
  public nombre:FormControl;
  public codigo:FormControl;
  public aprobado:FormControl;
  public disponible:FormControl; 
  public comision: FormControl ;
  public usuario_id: FormControl ;
  public admin_id: FormControl ;

  public proyecto:ProyectosModel;
  public registerProject: FormGroup;

  public comisionInput:number = null;
  public admins:Array<UserModel>;
  public solicitantes:Array<UserModel>;
  public cargaAdmin:boolean;
  public cargaUser:boolean;
  public registro:string;


  

  constructor(
    public _formBuilder: FormBuilder,
    private _projeServi:ProjectService,
    public dialog: MatDialog 
    ) { 


    this.proyecto = new ProyectosModel(null,'','',null,null,0.00,'ACTIVO',null,null,'','');


    this.validarFormulario();

  }
  


  calcularPorcentaje(){
    if(this.proyecto.aprobado !== null){
      
      this.proyecto.aprobado = +this.proyecto.aprobado;
      this.proyecto.comision = this.proyecto.aprobado * this.comisionInput;
      this.proyecto.comision = +this.proyecto.comision.toFixed(2)  
      this.proyecto.disponible = this.proyecto.aprobado - this.proyecto.comision;
      this.proyecto.disponible = +this.proyecto.disponible.toFixed(2);
    }
  }
 



  validarFormulario(){
    this.aprobado = new FormControl(null, [Validators.required]);
    this.disponible = new FormControl(null, [Validators.required]);
  

    this.nombre = new FormControl(null, [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9 ]+')]);
    this.codigo = new FormControl(null, [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9- ]+')]);

    this.usuario_id = new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]);
    this.admin_id = new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]);


    this.registerProject = this._formBuilder.group({
      nombre:this.nombre,
      codigo:this.codigo,
      aprobado:this.aprobado,
      disponible:this.disponible,
      comision:this.comision,
      usuario_id:this.usuario_id,
      admin_id:this.admin_id
    });
  }

  


  ngOnInit(): void {
    this.getAdmins();
    this.getSolicitantes();
  }

  register(form){
    if(form.valid){
      const dialogRef = this.dialog.open(DetalleCrearProyectoComponent, {
        width: '300px',
        data: {
          infoProyecto:this.proyecto,
          infoSolicitantes:this.solicitantes,
          infoAdmins:this.admins
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.registro = result;
  
        if(result === 'exitoso') {
          console.log(this.proyecto);

          form.reset();
          
        }
        
      });
    }

    
  }

  

  getErrorMessage(campo, ErrorRequired = 'Debe ingresar el nombre', patternError='Campo Incorrecto') {
    let msj:string;
    if (campo.hasError('required')) {
      msj = ErrorRequired;
    }
    if(campo.hasError('pattern')){
      msj = patternError;
    }
    return msj;
  }

  getAdmins(){
    this._projeServi.getAllAdmins().subscribe(res => {
        this.cargaAdmin = true;
        this.admins = res.solicitantes;
    },
    err => console.log(err));
  }
  getSolicitantes(){
    this._projeServi.getAllSolicitantes().subscribe(res => {
        this.cargaUser = true;
        this.solicitantes = res.solicitantes;
    });
  }


}
