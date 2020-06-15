import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';


import { Concepto } from 'src/app/models/concepto';
import { ConceptoService } from 'src/app/services/concepto.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';


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
    setInterval(()=> {this.cargarConceptos();}, 180000)
  }

  

  cargarConceptos(){
    this._conSV.getAll().subscribe(res => {
      this.dataSource.data = res
      
    },
    err=> {
      FuncionesCompartidas.alertConfirmSwal('ha ocurrido un error inesperado',null,'error',true,'cancelar','intentar nuevamente').then((result) => {
        if(result.value){
          this.cargarConceptos();
        }else{
          this.route.navigate(['panel-administrativo','modulos-extras']);
        }
      });
      
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
          console.log(res)
          Swal.fire(
            res,
            '',
            'success'
          );
          this.cargarConceptos()
        },error =>{
          console.log(error)
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
