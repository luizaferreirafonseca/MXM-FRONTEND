import { Component } from '@angular/core';
import { HeaderLoginComponent } from '../header-login/header-login.component';

@Component({
  selector: 'app-login-componente',
  standalone: true,
  imports: [HeaderLoginComponent],
  templateUrl: './login-componente.component.html',
  styleUrl: './login-componente.component.css'
})
export class LoginComponenteComponent {

}
