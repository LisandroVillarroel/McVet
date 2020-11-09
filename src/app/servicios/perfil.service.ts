import { PerfilI } from './../modelo/perfil-interface';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './../autentica/_services';

import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {


  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authenticationService.getToken()
  });

  // POST
  postDataPerfil(dato): Observable<any> {
    return this.http.post<PerfilI>(`${environment.apiUrl}/perfil`, JSON.stringify(dato), { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // PUT
  putDataPerfil(dato): Observable<any> {
    console.log('id:', dato._id);
    return this.http.put<PerfilI>(`${environment.apiUrl}/perfil/${dato._id}`, JSON.stringify(dato), { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // PUT
  deleteDataPerfil(dato): Observable<any> {
    console.log('id:', dato._id);
    return this.http.delete<PerfilI>(`${environment.apiUrl}/perfil/${dato._id}/${dato.usuarioModifica_id}`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getDataPerfil() {
    console.log('paso service 1');
    return this.http.get(`${environment.apiUrl}/perfilTodo/12514508-6`, { headers: this.headers })
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
