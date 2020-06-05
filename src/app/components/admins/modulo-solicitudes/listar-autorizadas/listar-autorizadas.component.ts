import { Component, OnInit, ViewChild } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-autorizadas',
  templateUrl: './listar-autorizadas.component.html',
  styleUrls: ['./listar-autorizadas.component.css'],
  providers:[SolicitudService]
})
export class ListarAutorizadasComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'proyecto', 'concepto', 'responsable', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private solSV:SolicitudService) { }

  ngOnInit(): void {
    this.getAutorizadas();

    this.dataSource.paginator = this.paginator;
  }

  getAutorizadas(){
    this.solSV.getSolicitudAutorizadas().subscribe(res => { 
      this.dataSource.data = res.solicitudes;
    })
  }
}
