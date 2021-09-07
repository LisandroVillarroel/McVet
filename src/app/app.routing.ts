﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './autentica/login/login.component';
import { RegisterComponent } from './autentica/register';
import { AuthGuard } from './autentica/_guards';
import { PortadaComponent } from './componentes/portada/portada.component';
import { PuntoVentaComponent } from './componentes/venta/punto-venta/punto-venta.component';
import { PropietarioComponent } from './componentes/mantenedores/propietario/propietario.component';
import { ClienteComponent } from './componentes/mantenedores/cliente/cliente.component';
import { ExamenComponent } from './componentes/mantenedores/examen/examen.component';
import { Formato1Component } from './componentes/mantenedores/formato1/formato1.component';
//import { IngresoExamenComponent } from './componentes/ingresos/ingreso-examen/ingreso-examen.component';
//import { SeleccionExamenComponent } from './componentes/ingresos/seleccion-examen/seleccion-examen.component';

const appRoutes: Routes = [

    { path: '', component: PortadaComponent, canActivate: [AuthGuard]},
    { path: 'inicio', component: PortadaComponent, },
    { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'PuntoVenta', component: PuntoVentaComponent, canActivate: [AuthGuard] },
    { path: 'propietario', component: PropietarioComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

const routes: Routes = [
    {path: '', component: PortadaComponent, canActivate: [AuthGuard]},
    { path: 'inicio', component: PortadaComponent, },
    {path: 'mantenedorCliente', component: ClienteComponent, canActivate: [AuthGuard]},
    { path: 'mantenedorPaciente', component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },


    { path: 'mantenedorExamen', component: ExamenComponent, canActivate: [AuthGuard] },
    { path: 'mantenedorFormato1', component: Formato1Component, canActivate: [AuthGuard] },

    {path: 'propietario', component: PropietarioComponent, canActivate: [AuthGuard]},


    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
