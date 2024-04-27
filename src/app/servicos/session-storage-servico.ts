import { Injectable } from '@angular/core';
import { UsuarioLogado } from '../modelos/UsuarioLogado';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageServico {

  constructor() { }


  salvarUsuario(Usuario: UsuarioLogado): void {
    sessionStorage.setItem('UsuarioLogado', JSON.stringify(Usuario));
  }

  pegarUsuarioLogado(): UsuarioLogado{
    const usuario = JSON.parse(sessionStorage.getItem('UsuarioLogado') || 'null');
    return usuario;
  }

  logout(): void {
    sessionStorage.removeItem('UsuarioLogado');
    
  }

  


}
