import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {FormControl, Validators, FormBuilder, FormGroup, AbstractControl, Validator} from '@angular/forms';

import { UserModelNuevo } from 'src/app/models/modelos/user.model';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  public user:UserModelNuevo;
  public identity:UserModelNuevo;

  public userLogin: FormGroup;
  public email:FormControl;
  public password:FormControl;
  
  

  public token:string;
  public message:string;
  public statusApi:string;
  public carga:boolean;

  constructor(
    public _formBuilder: FormBuilder,
    private _route:Router,
    private _router:ActivatedRoute,
    private _loginService:LoginService,
    private renderer:Renderer2
  ) {
    this.user = new UserModelNuevo(null,null,null,null,null,null)
    this.validarFormulario();
   }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    this._router.params.subscribe(params => {
      let logout = +params['sure'];
      if(logout === 1){
        sessionStorage.removeItem('identity');
        sessionStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        this._route.navigate(['login']);
      }
    })
  }

  iniciarSesion(user, boton){
    this.carga = true;
    this.renderer.setAttribute(boton.nativeElement, "disabled", "true");
    FuncionesCompartidas.funcionesCompartidas(null,'info','Espere un momento',false)        

    this._loginService.loginUser(this.user).subscribe(res=>{
      if(res.usuario){
        FuncionesCompartidas.funcionesCompartidas(2500,'success','Bienvenido al sistema',false)
        sessionStorage.setItem('token', JSON.stringify(res.token));
        sessionStorage.setItem('identity', JSON.stringify(res.usuario));
        this._route.navigate(['redireccion']);
      }else{
        FuncionesCompartidas.funcionesCompartidas(4000,'error',res,false)
        this.carga = false;
        user.reset()  
        this.renderer.setAttribute(boton.nativeElement, "disabled", "false");
      }
      
    },
    err=> {
      this.statusApi ='error';   
      if(err.status !== 0){
        
        FuncionesCompartidas.funcionesCompartidas(2500,'error',err,false)     
      }else{
        this.message = 'Fallo de conexion';
      }
      FuncionesCompartidas.funcionesCompartidas(2500,'error','ha ocurrido un error inesperado',false)      
      this.carga = false;
      user.reset()
    }, () => {
      
      this.renderer.setAttribute(boton.nativeElement, "disabled", "false");
    })
    
  }

  validarFormulario(){
    this.email = new FormControl(null, [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
    this.password = new FormControl(null, [Validators.required]);
    

    this.userLogin = this._formBuilder.group({
      password:this.password,
      email:this.email
    });


  }

}
