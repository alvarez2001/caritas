import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { ProyectosModel } from 'src/app/models/proyectos.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from 'src/app/models/user.model';
import { ProjectService } from 'src/app/services/project.service';
declare let alertify:any;


@Component({
  selector: 'app-detalle-crear-proyecto',
  templateUrl: './detalle-crear-proyecto.component.html',
  styleUrls: ['./detalle-crear-proyecto.component.css'],
  providers:[ProjectService]
})
export class DetalleCrearProyectoComponent implements OnInit {

  public admins:UserModel;
  public solicitantes:UserModel;
  public infoProyecto:ProyectosModel;

  constructor(
      private _projeServi:ProjectService,
      private renderer:Renderer2,
      public dialogRef: MatDialogRef<DetalleCrearProyectoComponent>,
      @Inject(MAT_DIALOG_DATA) public infoGeneral
    )  { 
      this.admins = this.infoGeneral.infoAdmins;
      this.solicitantes = this.infoGeneral.infoSolicitantes;
      this.infoProyecto = this.infoGeneral.infoProyecto;
    }

  ngOnInit(): void {
    
  }

  crearProyecto(form, button){
    console.log(button)
    let msj:string;
    this.renderer.setAttribute(button.nativeElement, "disabled", "true");
    this._projeServi.crearProyecto(form).subscribe(res =>{
      if(res.status === 'success'){
        msj = 'exitoso';
        
      }else{
        msj = 'fallido';
      }
    },
    err => { msj = 'fallido';},
    () => {
      if(msj == 'exitoso'){
        alertify.notify('Registro exitoso del proyecto', 'success',5);
      }else{
        alertify.notify('Ha ocurrido un error al registrar', 'error',5);
      }
      this.renderer.setAttribute(button.nativeElement, "disabled", "false");
      this.dialogRef.close(msj);
    } );
  
  }



}
