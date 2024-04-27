import { Routes } from '@angular/router';
import { LoginComponenteComponent } from './login/login-componente.component';
import { MainComponent } from './pagina-principal/main.component';
import { authGuardGuard } from './auth-guard/auth-guard.guard';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
      path: 'login',
      component: LoginComponenteComponent,
    },
    {
      path: 'pagina-principal',
      component: MainComponent, canActivate: [authGuardGuard]
    },
];
