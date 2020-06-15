import { Component, OnInit, Inject } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { UserModelNuevo } from 'src/app/models/modelos/user.model';
import { FuncionesCompartidas } from 'src/app/models/shared/funcionesCompartidas';


@Component({
    selector: 'app-modificar-usuario',
    templateUrl: './modificar-usuario.component.html',
    styleUrls: ['./modificar-usuario.component.css'],
    providers:[UserService]
  })
  export class ModificarUsuarioComponent implements OnInit{
  

    public nombres:FormControl;
    public apellidos:FormControl;
    public rol:FormControl;
    public status:FormControl;

    public updateUser: FormGroup;
    public user:UserModelNuevo;
    public statusPut:boolean;


    constructor(
      public _formBuilder: FormBuilder,
      public dialogRef: MatDialogRef<ModificarUsuarioComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any,
      private _userSer:UserService
      ) {
        this.user = new UserModelNuevo(this.data.name,this.data.surname,this.data.rol,this.data.status,null,null)
      this.validarFormulario();
      
    }

    onNoClick(): void {
      this.dialogRef.close();
    }



    
  
    ngOnInit(): void {
    }

    



    updateUserData(data){
      

      FuncionesCompartidas.funcionesCompartidas(null,'info','Porfavor espere un momento', false)

      this._userSer.actualizarUsuario(this.user, this.data.id).subscribe(res=>{
        console.log(res)
        //this.dialogRef.close(true);
        FuncionesCompartidas.funcionesCompartidas(null,'success','se ha actualizado', true)
      },
      err => {
        console.log(err)
        if(err.status !== 0){
          FuncionesCompartidas.funcionesCompartidas(null,'error',err.error,true);
        }
        else{
          FuncionesCompartidas.funcionesCompartidas(null,'error','ha ocurrido un error inesperado');
        }
        
      })

    }
  
    validarFormulario(){
      this.nombres = new FormControl(this.data.name, [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+')]);
      this.apellidos = new FormControl(this.data.surname, [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+')]);
      this.rol = new FormControl(this.data.rol, [Validators.required]);
      this.status = new FormControl(this.data.status, [Validators.required]);
  
  
      this.updateUser = this._formBuilder.group({
        nombres:this.nombres,
        apellidos:this.apellidos,
        rol:this.rol,
        status:this.status
      });
    }
  
  }