import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    if(token){
      headers.set('Authorization', token); 
    }

    const reqClone = req.clone({
      headers
    })
    return next.handle( reqClone ).pipe(
      catchError( this.manejarErrores ) 
    );
  }


  manejarErrores(error :HttpErrorResponse){
    
    let errores = error;
  
    return throwError(errores)
  }

}
