import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './autentica/_services';

import { JwtResponseI } from './autentica/_models';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUsuario: JwtResponseI;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {
        this.authenticationService.currentUsuario.subscribe(x => this.currentUsuario = x);
    }

    ngOnInit() {
    //  if (JSON.parse(localStorage.getItem('currentUsuario')) != null) {
    //   this.currentUsuario.usuarioDato = JSON.parse(localStorage.getItem('currentUsuario')) || [];
    //   console.log('1: ', this.currentUsuario.usuarioDato);

      console.log('0: ', this.authenticationService.getCurrentUser());
       if (this.authenticationService.getCurrentUser() != null) {
        this.currentUsuario.usuarioDato = this.authenticationService.getCurrentUser() ;

      }
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
