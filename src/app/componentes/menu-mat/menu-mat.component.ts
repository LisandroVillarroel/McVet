import { Component, OnInit } from '@angular/core';

import { JwtResponseI } from '../../autentica/_models';

import {MenuItem} from './../../modelo/menu-interface';

@Component({
  selector: 'app-menu-mat',
  templateUrl: './menu-mat.component.html',
  styleUrls: ['./menu-mat.component.css']
})
export class MenuMatComponent  {
  currentUsuario: JwtResponseI;
  /*
  navItems: MenuItem[] = [
    {
      displayName: '',
      iconName: 'more_vert',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Delight your Organization',
                  iconName: 'star_rate',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'Delight your Organization',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback'
        }
      ]
    }
  ];
*/

menuItems: MenuItem[] = [
  {
    displayName: '',
    iconName: 'more_vert',
    children: [
      {
        displayName: 'Inicio',
        iconName: 'feedback',
        route: 'inicio'
      },
      {
        displayName: 'Ficha',
        iconName: 'feedback',
        route: 'inventario'
      },
      {
        displayName: 'Ingreso Resultados',
        iconName: 'feedback',
        route: 'PuntoVenta'
      },
      {
        displayName: 'Mantenedores',
        iconName: 'speaker_notes',
        children: [
        {
            displayName: 'Usuarios',
            iconName: 'star_rate',
            route: 'usu'
        },
        {
          displayName: 'Perfiles',
          iconName: 'star_rate',
          route: 'perfiles'
        },
        {
          displayName: 'Empresas',
          iconName: 'star_rate',
          route: 'empresa'
        }
      ]
      },
      {
        displayName: 'Cerrar',
        iconName: '',
        route: ''
      },
    ]
  }];

  constructor(  ) {  }
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
