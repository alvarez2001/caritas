import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { ProjectService } from 'src/app/services/project.service';
import { ProyectosModel } from 'src/app/models/proyectos.model';
import { MatDialog } from '@angular/material/dialog';
import { DetalleProyectoComponent } from '../detalle-proyecto/detalle-proyecto.component';
import { ModificarProyectoComponent } from '../modificar-proyecto/modificar-proyecto.component';
import { UserModel } from 'src/app/models/user.model';
declare let alertify:any;


@Component({
  selector: 'app-listar-proyectos',
  templateUrl: './listar-proyectos.component.html',
  styleUrls: ['./listar-proyectos.component.css'],
  providers: [ProjectService]
})
export class ListarProyectosComponent implements OnInit, AfterViewInit {

  public proyectos:Array<ProyectosModel>;
  public cargaFallida:string;
  public ocultarCarga:boolean;
  public displayedColumns: string[] = ['codigo', 'nombre', 'disponible', 'status', 'acciones'];
  public dataSource:MatTableDataSource<any>;
  public admins:Array<UserModel>;
  public solicitantes:Array<UserModel>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _projeServi:ProjectService,
    public dialog: MatDialog
  ) { }

  

  ngOnInit() {
    this.cargarTodo();
  }

  cargarTodo(){
    this.getAdmins();
    this.getSolicitantes();
    this.getAllProject();
  }

  ngAfterViewInit(){
    this.paginator._intl.itemsPerPageLabel = 'Proyectos Mostrados';
    this.paginator._intl.nextPageLabel = 'Pagina Siguiente';
    this.paginator._intl.previousPageLabel = 'Pagina anterior';
    this.paginator._intl.firstPageLabel = 'Primera pagina';
    this.paginator._intl.lastPageLabel = 'Ultima pagina';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getAllProject(){
    this._projeServi.getAll().subscribe(
      res=>{
        if(res){
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.ocultarCarga = true;
        }else{
          this.cargaFallida = 'Carga fallida, Revise su internet';
        }
      },
      err=> this.cargaFallida = 'Carga fallida, Revise su internet');
  }

  editarProyecto(proyect, admins, solicitantes){
    const dialogRef = this.dialog.open(ModificarProyectoComponent, {
      width: '450px',
      data: {
        datos:proyect,
        admins:admins,
        solicitantes:solicitantes
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getAllProject();
        alertify.notify('Proyecto Actualizado', 'success', 3)
      }
    });
  }

  verProyecto(project){
    const dialogRef = this.dialog.open(DetalleProyectoComponent, {
      width: '450px',
      data: project
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }  

  private getAdmins(){
    this._projeServi.getAllAdmins().subscribe(res => {
        this.admins = res;
    },
    err => console.log(err));
  }
  private getSolicitantes(){
    this._projeServi.getAllSolicitantes().subscribe(res => {
        this.solicitantes = res;
    }, err=> console.log(err));
  }

}
