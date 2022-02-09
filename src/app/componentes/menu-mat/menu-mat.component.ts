import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy,Input } from '@angular/core';
//import { IConsultaLoginPerfil, IInicio, IMenuLateral } from '@app/interface/inicio';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

import {MenuItem} from './../../modelo/menu-interface';
import { JwtResponseI } from '@app/autentica/_models';
import { AuthenticationService } from '@app/autentica/_services';

@Component({
  selector: 'app-menu-mat',
  templateUrl: './menu-mat.component.html',
  styleUrls: ['./menu-mat.component.css']
})
export class MenuMatComponent implements OnDestroy {

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];

  position = new FormControl(this.positionOptions[0]);

  currentUsuario: JwtResponseI;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private location: Location,
    private authenticationService: AuthenticationService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._MOBILEQUERYLISTENER = () => changeDetectorRef.detectChanges();
    // deprecated: MediaQueryList.addListener(listener);

    this.mobileQuery.addEventListener('change', this._MOBILEQUERYLISTENER);

    this.authenticationService.currentUsuario.subscribe(x => this.currentUsuario = x);
  }


  mobileQuery: MediaQueryList;



menuItems: MenuItem[] = [

      {
        displayName: 'Inicio',
        iconName: 'home',
        route: 'inicio',
        disabled: false
      },
      {
        displayName: 'Ingreso Ficha',
        iconName: 'local_hospital',
        route: 'ingresoFicha',
        disabled: false
      },
      {
        displayName: 'Mantenedores',
        iconName: 'list',
        disabled: false,
        children: [
        {
            displayName: 'Cliente',
            iconName: 'forward',
            route: 'mantenedorCliente',
            disabled: false
        },
        {
          displayName: 'Doctor Solicitante',
          iconName: 'forward',
          route: 'doctorSolicitante',
          disabled: false
        },
        {
          displayName: 'Exámen',
          iconName: 'forward',
          route: 'mantenedorExamen',
          disabled: false
        },
        {
          displayName: 'Especie',
          iconName: 'forward',
          route: 'mantenedorEspecie',
          disabled: false
        },
        {
          displayName: 'Raza',
          iconName: 'forward',
          route: 'mantenedorRaza',
          disabled: false
        },
        {
          displayName: 'Formatos',
          iconName: 'forward',
          route: 'mantenedorFormatos',
          disabled: false
        }
        ]
      },
      {
        displayName: 'Cerrar',
        iconName: 'exit_to_app',
        route: '',
        disabled: false
      },
    ]
  ;

  private _MOBILEQUERYLISTENER: () => void;

  shouldRun = true;

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._MOBILEQUERYLISTENER);
  }

  traeTituloModulo(valor:any){
   // this.tituloModulo = valor;
  }

  getMenu() {
   return this.menuItems.filter((item) => item.disabled === false);
  }

/*
  fillerNav = [
    {name: 'Inicio', route: 'inicio', icon: ''},
    {name: 'Usuarios', route: 'usu', icon: ''},
    {name: 'Cotización', route: 'usu', icon: ''},
    {name: 'Orden de Trabajo', route: 'usu', icon: ''},
    {name: 'Inventario', route: 'inventario', icon: ''},
    {name: 'Factura', route: 'PuntoVenta', icon: ''},
    {name: 'Mantenedores', route: 'usu', icon: ''},
    {name: 'Home', route: 'home', icon: ''}
  ];
*/
}
