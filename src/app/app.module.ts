import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

// used to create fake backend
import { fakeBackendProvider } from './autentica/_helpers';
import { AlertComponent } from './autentica/_components';
import { JwtInterceptor, ErrorInterceptor } from './autentica/_helpers';
import { LoginComponent } from './autentica/login/login.component';
import { RegisterComponent } from './autentica/register';

import { RutModule } from 'rut-chileno'; // <- aqui debes importarlo
import { Ng2Rut, RutValidator } from 'ng2-rut';
import { routing } from './app.routing';

import { HomeComponent } from './home';
import { MenuMatComponent } from './componentes/menu-mat/menu-mat.component';
import { MenuListItemComponent } from './componentes/menu-list-item/menu-list-item.component';
import { PortadaComponent } from './componentes/portada/portada.component';

import { PuntoVentaComponent } from './componentes/venta/punto-venta/punto-venta.component';
import { DetalleVentaComponent } from './componentes/venta/detalle-venta/detalle-venta.component';
import { EditableComponent } from './componentes/venta/editable/editable.component';

import { PropietarioComponent } from './componentes/mantenedores/propietario/propietario.component' ;
import { ModificaPropietarioComponent } from './componentes/mantenedores/propietario/modifica-propietario/modifica-propietario.component';
import { AgregaPropietarioComponent } from './componentes/mantenedores/propietario/agrega-propietario/agrega-propietario.component';
import { EliminaPropietarioComponent } from './componentes/mantenedores/propietario/elimina-propietario/elimina-propietario.component';
import { ConsultaPropietarioComponent } from './componentes/mantenedores/propietario/consulta-propietario/consulta-propietario.component';

// Servicios
import { MenuService } from './servicios/menu.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es';
import localeFrExtra from '@angular/common/locales/extra/es';
import { AutoFocusDirective } from './directivas/auto-focus.directive';
import { EditModeDirective } from './directivas/edit-mode.directive';
import { ViewModeDirective } from './directivas/view-mode.directive';
import { FocusableDirective } from './directivas/focusable.directive';
import { EditableOnEnterDirective } from './directivas/edit-on-enter.directive';

import { ClienteComponent } from './componentes/mantenedores/cliente/cliente.component';
import { AgregaClienteComponent } from './componentes/mantenedores/cliente/agrega-cliente/agrega-cliente.component';
import { ModificaClienteComponent } from './componentes/mantenedores/cliente/modifica-cliente/modifica-cliente.component';
import { ConsultaClienteComponent } from './componentes/mantenedores/cliente/consulta-cliente/consulta-cliente.component';
import { EliminaClienteComponent } from './componentes/mantenedores/cliente/elimina-cliente/elimina-cliente.component';
import { ExamenComponent } from './componentes/mantenedores/examen/examen.component';

import { AgregaExamenComponent } from './componentes/mantenedores/examen/agrega-examen/agrega-examen.component';
import { ModificaExamenComponent } from './componentes/mantenedores/examen/modifica-examen/modifica-examen.component';
import { ConsultaExamenComponent } from './componentes/mantenedores/examen/consulta-examen/consulta-examen.component';
import { EliminaExamenComponent } from './componentes/mantenedores/examen/elimina-examen/elimina-examen.component';

import { AgregaExamenesFichasComponent } from './componentes/ingresosExamenFicha/agrega-examen-ficha/agrega-examenes-fichas.component';

import { ExamenesIngresadosComponent } from './componentes/ingresosExamenFicha/examenes-ingresados.component';
import { MaterialModule } from './material.module';
import { Formato1Component } from './componentes/mantenedores/formato1/formato1.component';
import { AgregaFormato1Component } from './componentes/mantenedores/formato1/agrega-formato1/agrega-formato1.component';
import { ConsultaFormato1Component } from './componentes/mantenedores/formato1/consulta-formato1/consulta-formato1.component';
import { EliminaFormato1Component } from './componentes/mantenedores/formato1/elimina-formato1/elimina-formato1.component';
import { ModificaFormato1Component } from './componentes/mantenedores/formato1/modifica-formato1/modifica-formato1.component';

registerLocaleData(localeFr, 'es', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenuMatComponent ,
    PortadaComponent,
    PuntoVentaComponent,
    DetalleVentaComponent,
    EditableComponent,
    AutoFocusDirective,
    EditModeDirective ,
    ViewModeDirective,
    FocusableDirective,
    EditableOnEnterDirective,
    PropietarioComponent ,
    AgregaPropietarioComponent ,
    ModificaPropietarioComponent ,
    EliminaPropietarioComponent ,
    ConsultaPropietarioComponent ,
    MenuListItemComponent ,
    ClienteComponent,
    EliminaClienteComponent,
    ConsultaClienteComponent,
    ModificaClienteComponent,
    AgregaClienteComponent,
    ExamenComponent,

    AgregaExamenComponent,
    ModificaExamenComponent,
    ConsultaExamenComponent,
    EliminaExamenComponent,

    AgregaExamenesFichasComponent,

    ExamenesIngresadosComponent,

    Formato1Component,

    AgregaFormato1Component,

    ConsultaFormato1Component,

    EliminaFormato1Component,

    ModificaFormato1Component,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RutModule, // // <- aqui debes importarlo
    Ng2Rut,
    routing,
    //
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'es'},
    fakeBackendProvider,
    RutValidator
  ],
   entryComponents: [
    AgregaPropietarioComponent,
    ModificaPropietarioComponent,
    ConsultaPropietarioComponent,
    EliminaPropietarioComponent,

    AgregaClienteComponent,
    ModificaClienteComponent,
    ConsultaClienteComponent,
    EliminaClienteComponent,

    AgregaExamenComponent,
    ModificaExamenComponent,
    ConsultaExamenComponent,
    EliminaExamenComponent,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
