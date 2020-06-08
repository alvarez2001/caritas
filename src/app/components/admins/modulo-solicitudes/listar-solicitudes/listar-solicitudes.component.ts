import {Component, OnInit, ViewChild, DoCheck} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { MatDialog } from '@angular/material/dialog';
import { AsignarMontoComponent } from '../asignar-monto/asignar-monto.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css'],
  providers:[SolicitudService, LoginService]
})
export class ListarSolicitudesComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'proyecto', 'concepto', 'responsable', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public idAdmin:number;

  constructor(
    private SoliSV:SolicitudService,
    public dialog: MatDialog,
    private logSV:LoginService
  ) { 
    this.idAdmin = this.logSV.getIdentity().sub;
    
  }

  ngOnInit(): void {
    this.solicitudesPendientes()
    this.dataSource.paginator = this.paginator;
    
  }



  asignarMontoDialog(data){
    const dialogRef = this.dialog.open(AsignarMontoComponent, {
      width: '1000px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.solicitudesPendientes();
    });
  }

  solicitudesPendientes(){
    this.SoliSV.getsoliPendientes().subscribe(res => {
      this.dataSource.data = res.solicitudes
    })
  }

  

}
