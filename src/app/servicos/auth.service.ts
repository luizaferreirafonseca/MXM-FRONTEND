import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../modelos/Login';
import { Observable } from 'rxjs';
import { UsuarioLogado as UsuarioLogado } from '../modelos/UsuarioLogado';

@Injectable({
  providedIn: 'root'
})
export class AuthServico {

  private url:string = 'https://mxm-api.marcusvogado.com/api/Auth/auth';

  constructor(private http: HttpClient) { }

  login(loginUsuario: Login): Observable<UsuarioLogado>{
    return this.http.post<UsuarioLogado>(`${this.url}`, loginUsuario)
  }
}
