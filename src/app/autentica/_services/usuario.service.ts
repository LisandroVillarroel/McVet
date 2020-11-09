import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { environment } from '@environments/environment';
import { JwtResponseI } from './../../autentica/_models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<JwtResponseI[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/${id}`);
    }

    register(user: JwtResponseI) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: JwtResponseI) {
        return this.http.put(`${environment.apiUrl}/users/${user.usuarioDato._id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}
