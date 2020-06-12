import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class IdentityGuard implements CanActivate{
    
    constructor(
        private _router:Router,
        private _loginService:LoginService
    ){}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | import("rxjs").Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const ruta = route.routeConfig.path;
        return this.checkLogin(ruta);
    }
    

    


    

    checkLogin(ruta){
        const identity = this._loginService.getIdentity();
        const rol = this._loginService.getIdentity().rol.toLowerCase();
        let valor;
        if(identity){
            valor = true;
            if(rol === 'admin' || rol === 'master'){
                this._router.navigate(['panel-administrativo']);
            }
            else{
                this._router.navigate(['solicitante']);
            }
        }else{
            this._router.navigate(['/']);
            valor = false
        }
        return valor;
    }
}