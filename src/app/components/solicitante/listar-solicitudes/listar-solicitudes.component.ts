import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css'],
  providers:[SolicitudService, LoginService]
})
export class ListarSolicitudesComponent implements OnInit {

  constructor(private solSV:SolicitudService, private logSV:LoginService) { }

  displayedColumns: string[] = ['numero', 'proyecto', 'status','acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.listarSolicitud();
    this.dataSource.paginator = this.paginator;
    
  }

  listarSolicitud(){
    const id = this.logSV.getIdentity().sub;
    this.solSV.getSolicitudUsuario(id).subscribe(res => {
      console.log(res)
      this.dataSource.data = res;
    })
  }

}
