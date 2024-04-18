import { Routes } from '@angular/router';
import { LoginComponenteComponent } from './login-componente/login-componente.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
      path: 'login',
      component: LoginComponenteComponent,
    },
    {
      path: 'main',
      component: MainComponent,
    },
];
