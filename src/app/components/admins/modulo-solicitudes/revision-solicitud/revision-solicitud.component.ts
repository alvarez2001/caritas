import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { LoginService } from 'src/app/services/login.service';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';




@Component({
  selector: 'app-revision-solicitud',
  templateUrl: './revision-solicitud.component.html',
  styleUrls: ['./revision-solicitud.component.css'],
  providers:[SolicitudService, LoginService]
})
export class RevisionSolicitudComponent implements OnInit {

  
  displayedColumns: string[] = ['numero', 'proyecto', 'concepto', 'total', 'acciones'];
  dataSource = new MatTableDataSource();

  public noHay:boolean;
  public idAdmin:number;
  public rolAdmin:string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private solSV:SolicitudService, private logSV:LoginService, private funciones:FuncionesCompartidas) { }

  ngOnInit() {
    this.rolAdmin = this.logSV.getIdentity().rol.toLocaleLowerCase();
    this.idAdmin = this.logSV.getIdentity().id;
    this.cargarInformacion();
    this.dataSource.paginator = this.paginator;
  }

  cargarInformacion(valor = false){
    if(!valor){
      FuncionesCompartidas.funcionesCompartidas(null,'warning','espere un momento')
    }

    this.solSV.getSolicitudRevision().subscribe(res => {
      if(!valor){
        FuncionesCompartidas.funcionesCompartidas(5000,'success','Informacion cargada')
      }
      if(res <= 0){
        this.noHay = true;
      }     
      else{
        this.noHay = false;
      }

      this.dataSource.data = res;
    }, err => {
      console.log(err);
      FuncionesCompartidas.funcionesCompartidas(7000,'error','Hubo un error inesperado');
    })
  }



  AnularSolicitud(id){
    const datos = {usuario: this.idAdmin}
    this.funciones.AlertConfirmPublic('Estas seguro?', `Anularas la solicitud #${id}`,'warning',true,'Cancelar','Eliminar').then((result) => {
      if(result.value){
        this.solSV.anularSolicitud(datos,id).subscribe(res=>{
          FuncionesCompartidas.funcionesCompartidas(6000,'success',res)
          this.cargarInformacion(true);
        }, err => {
          console.log(err);
          FuncionesCompartidas.funcionesCompartidas(6000,'error','ha ocurrido un error inesperado')
        })
      }
    })
  }

}
