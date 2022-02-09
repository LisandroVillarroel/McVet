import { Injectable, ɵConsole } from '@angular/core';
import { AuthenticationService } from './../autentica/_services';

import { environment } from '@environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { IRaza } from '@app/modelo/raza-interface';
import { IEspecie } from '@app/modelo/especie-interface';

@Injectable({
  providedIn: 'root'
})

export class EspecieService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authenticationService.getToken()
  });


  // getDataPerfil() {
  //  return this.perfilServ;
  // }

  // POST
  postDataEspecie(dato): Observable<any> {
    return this.http.post<IEspecie>(`${environment.apiUrl}/especie`, JSON.stringify(dato), { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // PUT
  putDataEspecie(dato): Observable<any> {
    console.log('id:', dato._id);
    return this.http.put<IEspecie>(`${environment.apiUrl}/especie/${dato._id}`, JSON.stringify(dato), { headers: this.headers })
    .pipe(
       retry(1),
      catchError(this.errorHandl)
    );
  }


  deleteDataEspecie(dato): Observable<any> {
    console.log('id:', dato._id);
    return this.http.delete<IEspecie>(`${environment.apiUrl}/especie/${dato._id}/${dato.usuarioModifica_id}`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getDataEspecie(empresaId) {
    return this.http.get(`${environment.apiUrl}/especieTodo/${empresaId}`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  errorHandl(error: HttpErrorResponse) {
    console.log('paso error: ', error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log('mio: ', errorMessage);
    Swal.fire(
      'ERROR INESPERADO',
      errorMessage,
     'error'
   );
    return throwError(errorMessage);
 }

}
