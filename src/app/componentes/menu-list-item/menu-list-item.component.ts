import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from './../../modelo/menu-interface';
import {Router} from '@angular/router';
import {MenuService} from './../../servicios/menu.service';
import { AuthenticationService } from '../../autentica/_services';
import { JwtResponseI } from '../../autentica/_models';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css']
})
export class MenuListItemComponent implements OnInit {

  currentUsuario: JwtResponseI;
  expanded: boolean;
  @Input() items: MenuItem[];
  @ViewChild('childMenu', {static: true}) public childMenu: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUsuario.subscribe(x => this.currentUsuario = x);
}

  ngOnInit() {
  }

  logout() {
    console.log('paso logout 1');
      this.authenticationService.logout();
      console.log('paso logout 2');
      this.router.navigate(['./login']);
      console.log('paso logout 3');
  }
}
