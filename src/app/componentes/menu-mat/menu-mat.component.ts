import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy,Input } from '@angular/core';
//import { IConsultaLoginPerfil, IInicio, IMenuLateral } from '@app/interface/inicio';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

import {MenuItem} from './../../modelo/menu-interface';
import { JwtResponseI } from '@app/autentica/_models';

@Component({
  selector: 'app-menu-mat',
  templateUrl: './menu-mat.component.html',
  styleUrls: ['./menu-mat.component.css']
})
export class MenuMatComponent implements OnDestroy {

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];

  position = new FormControl(this.positionOptions[0]);

  currentUsuario: JwtResponseI;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private location: Location
    /*private menuLateralService: MenuLateralService*/) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._MOBILEQUERYLISTENER = () => changeDetectorRef.detectChanges();
    // deprecated: MediaQueryList.addListener(listener);

    this.mobileQuery.addEventListener('change', this._MOBILEQUERYLISTENER);

  }


  mobileQuery: MediaQueryList;



menuItems: MenuItem[] = [

      {
        displayName: 'Inicio',
        iconName: 'feedback',
        route: 'inicio',
        disabled: false
      },
      {
        displayName: 'Ingreso Resultados',
        iconName: 'feedback',
        route: 'ingresoResultados',
        disabled: false
      },
      {
        displayName: 'Mantenedores',
        iconName: 'speaker_notes',
        disabled: false,
        children: [
        {
            displayName: 'Cliente',
            iconName: 'star_rate',
            route: 'mantenedorCliente',
            disabled: false
        },
        {
          displayName: 'Propietario',
          iconName: 'star_rate',
          route: 'propietario',
          disabled: false
        },
        {
          displayName: 'Exámen',
          iconName: 'star_rate',
          route: 'mantenedorExamen',
          disabled: false
        },
        {
          displayName: 'Especie',
          iconName: 'star_rate',
          route: 'mantenedorEspecie',
          disabled: false
        },
        {
          displayName: 'Raza',
          iconName: 'star_rate',
          route: 'mantenedorRaza',
          disabled: false
        },
        {
          displayName: 'Formatos',
          iconName: 'star_rate',
          route: 'mantenedorFormatos',
          disabled: false
        }
        ]
      },
      {
        displayName: 'Cerrar',
        iconName: '',
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
