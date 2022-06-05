// Libraries
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { ResponseNewUser } from '../models/response-new-user.model';
import { ResponseAllUsers } from '../models/response-all-users.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getFetchSincrono(): Promise<Array<Usuario>> {
    return fetch(`http://localhost:8080/usuarios`)
      .then((response) => response.json())
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getFetch(): Promise<ResponseAllUsers> {
    return new Promise<ResponseAllUsers>((resolve, reject) => {
      fetch(`http://localhost:8080/usuarios`)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Obtiene los usuarios de la base de datos
   * @returns {Observable<Response>}
   */
  getAll(): Observable<ResponseAllUsers> {
    return this.http.get<ResponseAllUsers>(`http://localhost:8080/usuarios`);
  }

  setInfo(form: Object): Observable<ResponseNewUser> {
    return this.http.post<ResponseNewUser>(
      `http://localhost:8080/usuario`,
      form
    );
  }
}
