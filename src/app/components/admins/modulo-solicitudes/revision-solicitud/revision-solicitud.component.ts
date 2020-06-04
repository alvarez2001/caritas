import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { MatDialog } from '@angular/material/dialog';
import { DetallerevSolicitudComponent } from '../detallerev-solicitud/detallerev-solicitud.component';



@Component({
  selector: 'app-revision-solicitud',
  templateUrl: './revision-solicitud.component.html',
  styleUrls: ['./revision-solicitud.component.css'],
  providers:[SolicitudService]
})
export class RevisionSolicitudComponent implements OnInit {

  
  displayedColumns: string[] = ['idSolicitud', 'nombre','responsable', 'total', 'disponible', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private solSV:SolicitudService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllRevision();
    this.dataSource.paginator = this.paginator;
  }

  getAllRevision(){
    this.solSV.getSolicitudesRevisada().subscribe(res => {
      this.dataSource.data = res.solicitudes      
    })
  }

  abrirDetalle(data): void{
    const dialogRef = this.dialog.open(DetallerevSolicitudComponent, {
      width: '1000px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllRevision();
    });
  }

}
