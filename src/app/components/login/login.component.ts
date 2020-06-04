import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {FormControl, Validators, FormBuilder, FormGroup, AbstractControl, Validator} from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  public user:UserModel;
  public userLogin: FormGroup;
  public email:FormControl;
  public password:FormControl;
  public identity:UserModel;
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
    this.user = new UserModel('','','','','','',1,'','','');
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

    this._loginService.loginUser(this.user).subscribe(res=>{
      if(res.status !== 'error'){
        this.token = res
        
        this._loginService.loginUser(this.user, true).subscribe(response=>{
          this.identity = response;

          

          sessionStorage.setItem('token', this.token);
          sessionStorage.setItem('identity', JSON.stringify(this.identity));

          this._route.navigate(['redireccion']);
        })
      }
    },
    err=> {
      this.statusApi ='error';
      if(err.status == 0){
        this.message = 'Error de conexion, revise su internet';
      }
      
      
    }, () => {
      this.carga = false;
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
