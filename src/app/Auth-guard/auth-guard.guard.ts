import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sessionStorageService: SessionStorageService = inject(SessionStorageService);
  const loggedUser = sessionStorageService.getLoggedUser();


  if (loggedUser){
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }


  
};
