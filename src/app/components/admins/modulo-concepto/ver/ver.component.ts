import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';


import { Concepto } from 'src/app/models/concepto';
import { ConceptoService } from 'src/app/services/concepto.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css'],
  providers:[ConceptoService]
})
export class VerComponent implements OnInit, AfterViewInit {
  

  constructor(private _conSV:ConceptoService, private route:Router) { }
  
  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Conceptos Mostrados';
  }
  displayedColumns: string[] = ['position', 'concepto', 'acciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  public conceptos:Concepto;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.cargarConceptos();
    setInterval(()=> {this.cargarConceptos(); console.log('set')}, 180000)
  }

  

  cargarConceptos(){
    this._conSV.getAll().subscribe(res => {
      this.conceptos = res.listado;
      this.dataSource.data = res.listado
    },
    err=> {
      Swal.fire({
        icon:'error',
        title:'Ha ocurrido un error de conexión',
        timer:3000,
        timerProgressBar:true,
        showConfirmButton:false
      })
      this.route.navigate(['panel-administrativo','modulos-extras']);
    })
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
