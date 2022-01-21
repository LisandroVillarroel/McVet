import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>('undefined');

  constructor(private router: Router, private http: HttpClient) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  headers: HttpHeaders = new HttpHeaders({
    /*  Authorization: this.authenticationService.getToken()*/
    });

     headersPerfil: HttpHeaders = new HttpHeaders({
      "auth-key": "mJ9NH2gRPf88ziYEtbEzZOIQKW7WpqtzCwLWXONt"
      });

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }

   // public closeNav() {
   // this.appDrawer.close();
  // }

 // public openNav() {
 //   this.appDrawer.open();
 // }
}
