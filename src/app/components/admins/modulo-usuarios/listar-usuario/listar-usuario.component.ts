import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ModificarUsuarioComponent } from '../modificar-usuario/modificar-usuario.component';

import Swal from 'sweetalert2';
import { DetalleUsuarioComponent } from '../detalle-usuario/detalle-usuario.component';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { Global } from 'src/app/services/global';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

declare let alertify:any;



@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
  providers:[UserService,LoginService]
})
export class ListarUsuarioComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['numero','nombres','apellidos','rol','status','acciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  public cargaStatus:boolean = true;

  public users:Array<UserModel>;
  public user:UserModel;
  public userActivo;
  public cargaFallida:string = 'Cargando Usuarios...';
  public token:string;
  public url:string;
  public rol;
  
  constructor(
    public dialog: MatDialog,
    private _userService:UserService,
    private _loginService:LoginService
    ){
      this.token = this._loginService.getToken();
      this.userActivo = this._loginService.getIdentity();
      this.url = Global.url;
      this.rol = this._loginService.getIdentity().rol;
      console.log(this.rol)
   }  
  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Usuarios Mostrados';
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.mostrarUsuarios()
  }


  mostrarUsuarios(){
    this.cargaStatus = true;
    this._userService.mostrarUsuarios().subscribe(res=>{
      console.log(res)
        this.dataSource.data = res.data;
        this.cargaStatus = false;
  
    },

    err=> {
      console.log(err);
      
    })
  }


  openDialog(datosUser): void {
    const dialogRef = this.dialog.open(ModificarUsuarioComponent, {
      width: '320px',
      data:datosUser
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.mostrarUsuarios();
        alertify.notify('Usuario Actualizado', 'success', 3)
      }
    });
  }



  detallesUser(datosUser){
    const dialogRef = this.dialog.open(DetalleUsuarioComponent, {
      width: '400px',
      data:datosUser
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  deleteUser(id){
    Swal.fire({
      title: 'Desea eliminar el usuario?',
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
        this._userService.deleteUser(id).subscribe(res=>{
          Swal.fire(
            'Usuario eliminado correctamente',
            '',
            'success'
          );
          this.mostrarUsuarios()
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


