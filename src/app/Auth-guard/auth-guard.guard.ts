import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { SessionStorageServico } from '../servicos/session-storage-servico';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sessionStorageService: SessionStorageServico = inject(SessionStorageServico);
  const usuarioLogado = sessionStorageService.pegarUsuarioLogado();


  if (usuarioLogado){
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }


  
};
