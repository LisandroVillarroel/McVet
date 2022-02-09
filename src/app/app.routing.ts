import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './autentica/login/login.component';
import { RegisterComponent } from './autentica/register';
import { AuthGuard } from './autentica/_guards';
import { PortadaComponent } from './componentes/portada/portada.component';
import { PropietarioComponent } from './componentes/mantenedores/propietario/propietario.component';
import { ClienteComponent } from './componentes/mantenedores/cliente/cliente.component';
import { ExamenComponent } from './componentes/mantenedores/examen/examen.component';
//import { FormatoComponent } from './componentes/mantenedores/formato1/formato1.component';
import { FormatosComponent } from './componentes/mantenedores/formatos/formatos.component';
import { ExamenesIngresadosComponent } from './componentes/ingresosExamenFicha/examenes-ingresados.component';
import { RazaComponent } from './componentes/mantenedores/raza/raza.component';
import { EspecieComponent } from './componentes/mantenedores/especie/especie.component';
import { DoctorSolicitanteComponent } from './componentes/mantenedores/doctor-solicitante/doctor-solicitante.component';
import { FichaComponent } from './componentes/fichaExamen/ficha/ficha.component';
//import { IngresoExamenComponent } from './componentes/ingresos/ingreso-examen/ingreso-examen.component';
//import { SeleccionExamenComponent } from './componentes/ingresos/seleccion-examen/seleccion-examen.component';

const appRoutes: Routes = [

    { path: '', component: PortadaComponent, canActivate: [AuthGuard]},
    { path: 'inicio', component: PortadaComponent, },
    { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'propietario', component: PropietarioComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

const routes: Routes = [
    { path: '', component: PortadaComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'inicio', component: PortadaComponent, },

    { path: 'ingresoFicha', component: FichaComponent, canActivate: [AuthGuard]},

    { path: 'mantenedorCliente', component: ClienteComponent, canActivate: [AuthGuard]},
    { path: 'mantenedorPaciente', component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'mantenedorExamen', component: ExamenComponent, canActivate: [AuthGuard] },
    { path: 'mantenedorEspecie', component: EspecieComponent, canActivate: [AuthGuard] },
    { path: 'mantenedorRaza', component: RazaComponent, canActivate: [AuthGuard] },

    { path: 'mantenedorFormatos', component: FormatosComponent, canActivate: [AuthGuard] },

    {path: 'doctorSolicitante', component: DoctorSolicitanteComponent, canActivate: [AuthGuard]},


    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
