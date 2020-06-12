import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
  providers:[LoginService]
})
export class AdministradorComponent implements OnInit {

  public nombreUsuario:string;
  public apellidoUsuario:string;


  constructor(private logSV:LoginService) { }

  ngOnInit(): void {
    this.nombresApellidosUsuario();
  }

  private nombresApellidosUsuario(){
    this.nombreUsuario = this.logSV.getIdentity().nombres;
    this.apellidoUsuario = this.logSV.getIdentity().apellidos;
  }



 
  



}
