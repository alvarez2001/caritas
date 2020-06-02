import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrarComponent } from '../registrar/registrar.component';
import { Concepto } from 'src/app/models/concepto';
import { ConceptoService } from 'src/app/services/concepto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css'],
  providers:[ConceptoService]
})
export class VerComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private _conSV:ConceptoService) { }

  public conceptos:Concepto;

  ngOnInit(): void {
    this.cargarConceptos();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrarComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result = true){
        this.cargarConceptos();
      }
    });
  }

  cargarConceptos(){
    this._conSV.getAll().subscribe(res => {
      this.conceptos = res.listado;
    },
    err=> alert('ha ocurrido un error'))
  }

  eliminarConcepto(id:number){
    Swal.fire({
      title: 'Desea eliminar el concepto?',
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
        this._conSV.delete(id).subscribe(res=>{
          Swal.fire(
            'Concepto eliminado correctamente',
            '',
            'success'
          );
          this.cargarConceptos()
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
}
