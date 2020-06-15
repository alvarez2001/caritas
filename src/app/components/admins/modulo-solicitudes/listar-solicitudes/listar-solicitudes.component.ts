import {Component, OnInit, ViewChild, DoCheck} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css'],
  providers:[SolicitudService, LoginService]
})
export class ListarSolicitudesComponent  implements OnInit  {

  displayedColumns: string[] = ['numero', 'proyecto', 'concepto', 'responsable', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public noHay:boolean;
  public idAdmin:number;

  constructor(
    private SoliSV:SolicitudService,
    public dialog: MatDialog,
    private logSV:LoginService,
    private funciones:FuncionesCompartidas
  ) { 
    this.idAdmin = this.logSV.getIdentity().id;
    
  }

  ngOnInit(): void {
    this.solicitudesPendientes()
    this.dataSource.paginator = this.paginator;
    
  }

  solicitudesPendientes(valor = false){
    if(!valor){
      FuncionesCompartidas.funcionesCompartidas(null,'warning','Porfavor espere un momento')
    }
    this.SoliSV.getsoliPendientes().subscribe(res => {
      if(!valor){
        FuncionesCompartidas.funcionesCompartidas(5000,'success','Informacion cargada')
      }
      if(res <= 0){
        this.noHay = true;
      }     
      else{
        this.noHay = false;
      }
      this.dataSource.data = res
    },
    erro =>{
      console.log(erro);
      FuncionesCompartidas.funcionesCompartidas(7000,'error','Hubo un error inesperado');
    })
  }

  AnularSolicitud(id){
    const datos = {usuario: this.idAdmin}
    this.funciones.AlertConfirmPublic('Estas seguro?', `Borraras la solicitud #${id}`,'warning',true,'Cancelar','Eliminar').then((result) => {
      if(result.value){
        this.SoliSV.anularSolicitud(datos,id).subscribe(res=>{
          FuncionesCompartidas.funcionesCompartidas(6000,'success',res)
          this.solicitudesPendientes(true);
        }, err => {
          console.log(err);
          FuncionesCompartidas.funcionesCompartidas(6000,'error','ha ocurrido un error inesperado')
        })
      }
    })
  }

  

}
