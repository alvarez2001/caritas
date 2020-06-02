import { Component, OnInit, Inject } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';


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
    public user:UserModel;
    public statusPut:boolean;


    constructor(
      public _formBuilder: FormBuilder,
      public dialogRef: MatDialogRef<ModificarUsuarioComponent>,
      @Inject(MAT_DIALOG_DATA) public data:UserModel,
      private _userSer:UserService
      ) {
        this.user = new UserModel(this.data.nombres,this.data.apellidos,'','',this.data.rol,'',this.data.id,this.data.status,'','')
      this.validarFormulario();
      
    }

    onNoClick(): void {
      this.dialogRef.close();
    }



    
  
    ngOnInit(): void {
    }

    



    updateUserData(data){
      let actualizar = {
        nombres: this.user.nombres,
        apellidos:this.user.apellidos,
        rol:this.user.rol,
        status:this.user.status
      }

      this._userSer.actualizarUsuario(actualizar, this.user.id).subscribe(res=>{
        if(res.status === 'success'){
          this.dialogRef.close(true);
        }else{
          this.statusPut = true;
        }
      },
      err => {
        this.statusPut = true;
      })

    }
  
    validarFormulario(){
      this.nombres = new FormControl(this.data.nombres, [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+')]);
      this.apellidos = new FormControl(this.data.apellidos, [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+')]);
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