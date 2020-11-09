import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './autentica/login/login.component';
import { RegisterComponent } from './autentica/register';
import { AuthGuard } from './autentica/_guards';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { PuntoVentaComponent } from './componentes/venta/punto-venta/punto-venta.component';
import { PerfilComponent } from './componentes/mantenedores/perfil/perfil.component';
import { EmpresaComponent } from './componentes/mantenedores/empresa/empresa.component';

const appRoutes: Routes = [

    { path: '', component: PortadaComponent, canActivate: [AuthGuard]},
    { path: 'inicio', component: PortadaComponent, },
    { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'inventario', component: InventarioComponent, canActivate: [AuthGuard] },
    { path: 'PuntoVenta', component: PuntoVentaComponent, canActivate: [AuthGuard] },
    { path: 'perfiles', component: PerfilComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

const routes: Routes = [
    {path: '', component: PortadaComponent, canActivate: [AuthGuard]},
    { path: 'inicio', component: PortadaComponent, },
    { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'inventario', component: InventarioComponent, canActivate: [AuthGuard] },
    { path: 'PuntoVenta', component: PuntoVentaComponent, canActivate: [AuthGuard] },

    {path: 'perfiles', component: PerfilComponent, canActivate: [AuthGuard]},
    {path: 'empresa', component: EmpresaComponent, canActivate: [AuthGuard]},

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
