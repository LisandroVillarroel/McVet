import { NgModule, LOCALE_ID } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Material Angular

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MAT_DIALOG_DATA, MatSnackBarModule} from '@angular/material';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
// Fin Angular

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
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { AgregaInventarioComponent } from './componentes/inventario/agrega-inventario/agrega-inventario.component';
import { ModificaInventarioComponent } from './componentes/inventario/modifica-inventario/modifica-inventario.component';
import { ConsultaInventarioComponent } from './componentes/inventario/consulta-inventario/consulta-inventario.component';
import { EliminaInventarioComponent } from './componentes/inventario/elimina-inventario/elimina-inventario.component';
import { PuntoVentaComponent } from './componentes/venta/punto-venta/punto-venta.component';
import { DetalleVentaComponent } from './componentes/venta/detalle-venta/detalle-venta.component';
import { EditableComponent } from './componentes/venta/editable/editable.component';

import { PerfilComponent } from './componentes/mantenedores/perfil/perfil.component';
import { AgregaPerfilComponent } from './componentes/mantenedores/perfil/agrega-perfil/agrega-perfil.component';
import { ModificaPerfilComponent } from './componentes/mantenedores/perfil/modifica-perfil/modifica-perfil.component' ;
import { EliminaPerfilComponent } from './componentes/mantenedores/perfil/elimina-perfil/elimina-perfil.component';
import { ConsultaPerfilComponent } from './componentes/mantenedores/perfil/consulta-perfil/consulta-perfil.component';

// Servicios
import { InventarioService } from './servicios/inventario.service';
import { MenuService } from './servicios/menu.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es';
import localeFrExtra from '@angular/common/locales/extra/es';
import { AutoFocusDirective } from './directivas/auto-focus.directive';
import { EditModeDirective } from './directivas/edit-mode.directive';
import { ViewModeDirective } from './directivas/view-mode.directive';
import { FocusableDirective } from './directivas/focusable.directive';
import { EditableOnEnterDirective } from './directivas/edit-on-enter.directive';

import { EmpresaComponent } from './componentes/mantenedores/empresa/empresa.component';
import { AgregaEmpresaComponent } from './componentes/mantenedores/empresa/agrega-empresa/agrega-empresa.component';
import { ModificaEmpresaComponent } from './componentes/mantenedores/empresa/modifica-empresa/modifica-empresa.component';
import { ConsultaEmpresaComponent } from './componentes/mantenedores/empresa/consulta-empresa/consulta-empresa.component';
import { EliminaEmpresaComponent } from './componentes/mantenedores/empresa/elimina-empresa/elimina-empresa.component';
registerLocaleData(localeFr, 'es', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    InventarioComponent ,
    AgregaInventarioComponent,
    ModificaInventarioComponent,
    ConsultaInventarioComponent,
    EliminaInventarioComponent,
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
    PerfilComponent ,
    AgregaPerfilComponent ,
    ModificaPerfilComponent ,
    EliminaPerfilComponent ,
    ConsultaPerfilComponent ,
    MenuListItemComponent ,
    EmpresaComponent,
    EliminaEmpresaComponent,
    ConsultaEmpresaComponent,
    ModificaEmpresaComponent,
    AgregaEmpresaComponent
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
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'es'},
    fakeBackendProvider,
    RutValidator
  ],
   entryComponents: [
    AgregaInventarioComponent,
    ModificaInventarioComponent,
    ConsultaInventarioComponent,
    EliminaInventarioComponent,

    AgregaPerfilComponent,
    ModificaPerfilComponent,
    ConsultaPerfilComponent,
    EliminaPerfilComponent,

    AgregaEmpresaComponent,
    ModificaEmpresaComponent,
    ConsultaEmpresaComponent,
    EliminaEmpresaComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
