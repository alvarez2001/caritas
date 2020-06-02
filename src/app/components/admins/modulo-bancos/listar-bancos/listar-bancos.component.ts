import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CrearBancoComponent } from '../crear-banco/crear-banco.component';
import { ConceptoService } from 'src/app/services/concepto.service';
import Swal from 'sweetalert2';
import { DetalleBancoComponent } from '../detalle-banco/detalle-banco.component';

@Component({
  selector: 'app-listar-bancos',
  templateUrl: './listar-bancos.component.html',
  styleUrls: ['./listar-bancos.component.css']
})
export class ListarBancosComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private concepSV:ConceptoService
    ) { }

  displayedColumns: string[] = ['titular', 'banco', 'created_at', 'acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.listarBancos();
    this.dataSource.paginator = this.paginator;
  }

  dialogCrearBanco(): void {
    const dialogRef = this.dialog.open(CrearBancoComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){ 
        this.listarBancos()
      }
    });
  }

  dialogDetalleBanco(data): void {
    const dialogRef = this.dialog.open(DetalleBancoComponent, {
      width: '400px',
      data: data
    });
  }

  eliminarBanco(id:number){
    Swal.fire({
      title: 'Desea eliminar el banco?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      showLoaderOnConfirm: true,
      timer:5000,
      timerProgressBar:true,
      preConfirm: () => {
        Swal.fire({
          title: 'Procesando la solicitud porfavor espere un momento',
          icon: 'info',
          showCloseButton: false,
          showCancelButton: false,
          focusConfirm: false,
          showConfirmButton:false
        })
        this.concepSV.deleteBanco(id).subscribe(res=>{
          Swal.fire(
            'Banco eliminado correctamente',
            '',
            'success'
          );
          this.listarBancos()
        },error =>{
          Swal.fire(
            'Error al procesar la solicitud',
            'Porfavor intente mas tarde',
            'error'
          )
        })
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }

  listarBancos(){
    this.concepSV.getAllBanco().subscribe(res => { 
      this.dataSource.data = res;
    });
  }

}
