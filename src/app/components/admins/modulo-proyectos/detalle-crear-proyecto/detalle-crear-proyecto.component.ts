import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { ProyectosModel } from 'src/app/models/proyectos.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from 'src/app/models/user.model';
import { ProjectService } from 'src/app/services/project.service';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';
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
    let msj:string;
    this.renderer.setAttribute(button.nativeElement, "disabled", "true");
    this._projeServi.crearProyecto(form).subscribe(res =>{
     FuncionesCompartidas.funcionesCompartidas(2500,'success',res)
     this.dialogRef.close(true);
    },
    err => {
      console.log(err)
      FuncionesCompartidas.funcionesCompartidas(2500,'error','ha ocurrido un error inesperado')
      this.dialogRef.close(false);
    },
    () => {
      this.renderer.setAttribute(button.nativeElement, "disabled", "false");
      
    } );
  
  }



}
