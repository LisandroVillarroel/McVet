import { EmpresaI } from './../modelo/empresa-interface';
import { Injectable, ɵConsole } from '@angular/core';
import { AuthenticationService } from './../autentica/_services';

import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmpresaService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authenticationService.getToken()
  });


  // getDataPerfil() {
  //  return this.perfilServ;
  // }

  // POST
  postDataEmpresa(dato): Observable<any> {
    return this.http.post<EmpresaI>(`${environment.apiUrl}/empresa`, JSON.stringify(dato), { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // PUT
  putDataEmpresa(dato): Observable<any> {
    console.log('id:', dato._id);
    return this.http.put<EmpresaI>(`${environment.apiUrl}/empresa/${dato._id}`, JSON.stringify(dato), { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // PUT
  deleteDataEmpresa(dato): Observable<any> {
    console.log('id:', dato._id);
    return this.http.delete<EmpresaI>(`${environment.apiUrl}/empresa/${dato._id}/${dato.usuarioModifica_id}`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getDataEmpresa() {

    return this.http.get(`${environment.apiUrl}/empresaTodo`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  errorHandl(error) {
    console.log('paso error: ', error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
