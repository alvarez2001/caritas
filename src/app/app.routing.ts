//import necesarios
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { LoginComponent } from './components/login/login.component';
import { Pag404Component } from './components/pag404/pag404.component';
import { RedireccionComponent } from './components/redireccion/redireccion.component';
import { IdentityGuard } from './guards/identity.guard';
import { RoleGuard } from './guards/role.guard';

//definir routes
const appRoutes:Routes = [
    {path: '',  redirectTo: '/login', pathMatch: 'full' },
    {path: 'login',component:LoginComponent},
    {path: 'logout/:sure',component:LoginComponent},
    {path: 'redireccion', component:RedireccionComponent, canActivate:[IdentityGuard, RoleGuard]},
    {path : '**', component:Pag404Component}

    
];

//exportar routes
export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes); 