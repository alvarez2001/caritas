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
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        return this.checkRol(route.routeConfig.path);
    }
    

   



    checkRol(ruta){
        const identity = this._loginService.getIdentity();
        const rol = identity.rol.toLowerCase();
            console.log(ruta)
        let status ;
        if(ruta === 'panel-administrativo' && (rol === 'master' || rol === 'admin')){
            status = true;
        }
        else if(ruta === 'solicitante' && rol === 'solicitante' ){
            status = true;
        }
        else{
            this.redireccion(rol);
            status = false;
        }

        return status;
    }

    redireccion(rol){
        switch (rol) {
            case 'master' || 'admin':
                this._router.navigate(['/panel-administrativo']);
                break;
            case 'solicitante':
                this._router.navigate(['/solicitante']);
                break;
            default:
                this._router.navigate(['/login']);
                break;
        }
    }

}