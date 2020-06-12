import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MaterialModule } from './material.module';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//poner angular en español
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

import { AppComponent } from './components/appComponent/app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptores/interceptor.service';
import { IdentityGuard } from './guards/identity.guard';
import { LoginService } from './services/login.service';
import { Pag404Component } from './components/pag404/pag404.component';
import { MasterModule } from './components/admins/master.module';
import { SolicitanteModule } from './components/solicitante/solicitante.module';
import { RedireccionComponent } from './components/redireccion/redireccion.component';
import { RoleGuard } from './guards/role.guard';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Pag404Component,
    RedireccionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MasterModule,
    SolicitanteModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    appRoutingProviders,
    { 
      provide: LOCALE_ID, 
      useValue: 'es' 
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    },
    IdentityGuard,
    RoleGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
