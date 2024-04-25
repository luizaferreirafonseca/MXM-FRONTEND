import { Injectable } from '@angular/core';
import { UserLogged } from '../Models/UserLogged';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }


  saveUser(User: UserLogged): void {
    sessionStorage.setItem('UsuarioLogado', JSON.stringify(User));
  }

  getLoggedUser(): UserLogged{
    const user = JSON.parse(sessionStorage.getItem('UsuarioLogado') || 'null');
    return user;
  }

  logout(): void {
    sessionStorage.removeItem('UsuarioLogado');
    
  }

  


}
