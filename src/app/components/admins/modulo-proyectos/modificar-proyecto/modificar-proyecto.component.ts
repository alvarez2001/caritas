import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProyectosModel } from 'src/app/models/proyectos.model';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-modificar-proyecto',
  templateUrl: './modificar-proyecto.component.html',
  styleUrls: ['./modificar-proyecto.component.css']
})
export class ModificarProyectoComponent implements OnInit {

  public proyecto:ProyectosModel;
  public putProject:FormGroup;
  public datosProyecto:ProyectosModel;
  public solicitantes:UserModel;
  public admins:UserModel;
  public statusPut:boolean;


  constructor(
    public dialogRef: MatDialogRef<ModificarProyectoComponent>,
    @Inject(MAT_DIALOG_DATA) public projectInfo,
    private _formBuilder:FormBuilder,
    private _serviceProject:ProjectService,
    private renderer:Renderer2
  ) { 
    this.datosProyecto = projectInfo.datos;
    this.solicitantes = projectInfo.solicitantes;
    this.admins = projectInfo.admins
    this.validarFormulario();
    this.proyecto = new ProyectosModel(
      this.datosProyecto.id,this.datosProyecto.nombre,this.datosProyecto.codigo,this.datosProyecto.aprobado,this.datosProyecto.disponible,this.datosProyecto.comision,this.datosProyecto.status,this.datosProyecto.usuario_id,this.datosProyecto.admin_id,this.datosProyecto.created_at,this.datosProyecto.updated_at
      )
  }

  ngOnInit(): void {
  }
  actualizar(proyecto, button){
    this.renderer.setAttribute(button.nativeElement, 'disabled', 'true');

    this._serviceProject.putProject(this.proyecto).subscribe(res=>{
      if(res.code === 200){
        this.dialogRef.close(true);
        this.renderer.setAttribute(button.nativeElement, 'disabled', 'false');
      }else{
        this.statusPut = true;
      }
    },
    err=> this.statusPut = true)
  }

  validarFormulario(){
    this.putProject = this._formBuilder.group({
      nombre: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9 ]+')]),
      codigo:new FormControl(null, [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9- ]+')]),
      status:new FormControl(null, [Validators.required]),
      usuario_id:new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
      admin_id:new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')])
    });
  }




}
