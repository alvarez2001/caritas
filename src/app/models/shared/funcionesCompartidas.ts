import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn:'root'
})
export class FuncionesCompartidas{
    static funcionesCompartidas(timer,icono,title,showButton = false,timerBar=true){
        return Swal.fire({
            title:title,
            timer:timer,
            timerProgressBar:timerBar,
            icon:icono,
            showConfirmButton:showButton
        })
    }

    static alertConfirmSwal(title,text,icon,cancelButton,cancelButtonText,confirmButtonText ,confirmButtonColor = '#3085d6',  cancelButtonColor ='#d33'){
        return Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: cancelButton,
            confirmButtonColor: confirmButtonColor,
            cancelButtonColor: cancelButtonColor,
            confirmButtonText: confirmButtonText,
            cancelButtonText:cancelButtonText
          });
    }

    public AlertConfirmPublic(title,text,icon,cancelButton,cancelButtonText,confirmButtonText ,confirmButtonColor = '#3085d6',  cancelButtonColor ='#d33'){
        return Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: cancelButton,
            confirmButtonColor: confirmButtonColor,
            cancelButtonColor: cancelButtonColor,
            confirmButtonText: confirmButtonText,
            cancelButtonText:cancelButtonText
          });
    }
}