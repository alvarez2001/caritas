import { Component, OnInit, ViewChild } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-solicitudes-duo',
  templateUrl: './solicitudes-duo.component.html',
  styleUrls: ['./solicitudes-duo.component.css'],
  providers:[SolicitudService]
})
export class SolicitudesDuoComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'proyecto', 'concepto', 'responsable', 'acciones'];
  dataSource = new MatTableDataSource();

  public titlePagina:string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private solSV:SolicitudService) { }

  ngOnInit(): void {
    this.getRechazadas();
    this.dataSource.paginator = this.paginator;
  }

  getRechazadas(){
    this.solSV.getSolicitudRechazadas().subscribe(res => { 
      this.titlePagina = 'Solicitudes Rechazadas';
      this.dataSource.data = res.solicitudes
    })
  }

}
