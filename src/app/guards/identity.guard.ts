import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, UrlSegment, Route } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class IdentityGuard implements CanActivate, CanLoad{
    
    constructor(
        private _router:Router,
        private _loginService:LoginService
    ){}
    

    canActivate(){
        return this.checkLogin();
    }


    canLoad(route:Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkLogin();
    }


    checkLogin(){
        const identity = this._loginService.getIdentity();

        if(identity){
            return true;
        }else{
            this._router.navigate(['login']);
            return false;
        }
    }
}