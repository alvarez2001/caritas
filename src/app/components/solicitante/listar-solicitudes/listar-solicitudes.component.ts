import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { LoginService } from 'src/app/services/login.service';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css'],
  providers:[SolicitudService, LoginService]
})
export class ListarSolicitudesComponent implements OnInit {

  constructor(private solSV:SolicitudService, private logSV:LoginService) { }

  displayedColumns: string[] = ['numero', 'proyecto', 'creado', 'status','acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.listarSolicitud();
    this.dataSource.paginator = this.paginator;
    
  }

  listarSolicitud(){
    const id = this.logSV.getIdentity().id;
    this.solSV.getSolicitudUsuario(id).subscribe(res => {
      FuncionesCompartidas.funcionesCompartidas(6000,'success','Informacion cargada correctamente')
      this.dataSource.data = res;
    }, err => {
      console.log(err)
      FuncionesCompartidas.funcionesCompartidas(4000,'error','ha ocurrido un error inesperado');
    })
  }

}
