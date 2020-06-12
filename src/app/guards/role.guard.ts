import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, UrlSegment, Route, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate{
    
    constructor(
        private _router:Router,
        private _loginService:LoginService
    ){}
    
    canActivate() {
        return this.checkRol();
    }
    

   



    checkRol(){
        const identity = this._loginService.getIdentity();
        const rol = identity.rol.toLowerCase();
        console.log(identity);
        let status ;
        if(rol === 'solicitante'){
            this._router.navigate(['/solicitante']);
            status = true;
        }
        else if(rol === 'master'){
            this._router.navigate(['/panel-administrativo']);
            status = true;
        }

        else if(rol === 'admin'){
            this._router.navigate(['/panel-administrativo']);
            status = true;
        }
        else{
            this._router.navigate(['/login']);
            status = false;
        }

        return status;
    }
}