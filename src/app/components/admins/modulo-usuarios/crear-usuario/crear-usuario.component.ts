import { Component, OnInit, Renderer2 } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup, AbstractControl, Validator} from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers:[UserService]
})
export class CrearUsuarioComponent implements OnInit, Validator {
  public email:FormControl;
  public nombres:FormControl;
  public apellidos:FormControl;
  public password:FormControl; 
  public rol: FormControl ;
  public mostrarValidacion:boolean;
  public statusRegistro:string;

  public user:UserModel;
  public registerUser: FormGroup;


  public hide:boolean;
  

  constructor(
    public _formBuilder: FormBuilder,
    private _userService:UserService,
    private renderer:Renderer2
  ) { 
    this.hide = true;

    this.user = new UserModel('','','','','','',1,'','','');


    this.validarFormulario();

  }

  validate(control: AbstractControl): import("@angular/forms").ValidationErrors {

    return this.compruebaEmail(control.value)

    throw new Error("Method not implemented.");
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }



 



  validarFormulario(){
    this.email = new FormControl(null, [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')], [this.compruebaEmail.bind(this)] );
    this.nombres = new FormControl(null, [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+')]);
    this.apellidos = new FormControl(null, [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+')]);
    this.password = new FormControl(null, [Validators.required]);
    this.rol = new FormControl(null, [Validators.required]);


    this.registerUser = this._formBuilder.group({
      nombres:this.nombres,
      apellidos:this.apellidos,
      password:this.password,
      rol:this.rol,
      email:this.email
    },
    {
      updateOn:'blur'
    });
  }

  compruebaEmail(control: AbstractControl){
    let email = {
      email:control.value
    }

    return new Promise(resolve => {
      this.mostrarValidacion = true;
      this._userService.comprobarEmail(email).subscribe(res =>{
        if( res.mensaje === 'Email disponible' ) {
          this.mostrarValidacion = false;
          resolve(null)
        } else {
          
          resolve({
            asyncInvalid: true
          });
        }
      },
      err=>{
        if(err.status === 406){
          this.mostrarValidacion = true;
          resolve({
            asyncInvalid: true
          });
        }
      })
    });
    
  }


  ngOnInit(): void {
    
  }

  register(form, button){
    this.renderer.setAttribute(button.nativeElement, "disabled", "true");
    this._userService.registrarUser(this.user).subscribe(res => {
      if(res.status == 'success'){
        this.statusRegistro = 'success';
        form.reset();
      }else{
        this.statusRegistro = 'failed';
      }
    },
    err =>{
      this.statusRegistro = 'failed';
      console.log(err)
    }, ()=>  this.renderer.setAttribute(button.nativeElement, "disabled", "false"))
  }

  

  getErrorMessage(email, ErrorRequired = 'Debe ingresar el nombre', patternError='Campo Incorrecto', asyncInvalid = 'El email ya se encuentra en uso') {
    let msj:string;
    if (email.hasError('required')) {
      msj = ErrorRequired;
    }
    if(email.hasError('pattern')){
      msj = patternError;
    }

    if(email.hasError('asyncInvalid')){
      msj = asyncInvalid;
    }
    return msj;
  }



}
