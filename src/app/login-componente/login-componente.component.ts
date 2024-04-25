import { Component } from '@angular/core';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SessionStorageService } from '../services/session-storage.service';
import { Login } from '../Models/Login';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-componente',
  standalone: true,
  imports: [HeaderLoginComponent, RouterLink, RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './login-componente.component.html',
  styleUrl: './login-componente.component.css'
})
export class LoginComponenteComponent {

  constructor(private authService: AuthService, private SessionStorageService: SessionStorageService, private router: Router) { }

  error: boolean = false;

  formulario = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  sendLogin() {

    if (this.formulario.value.email && this.formulario.value.password) {
      const login: Login = {
        Email: this.formulario.value.email,
        Password: this.formulario.value.password

      }

      this.authService.login(login).subscribe(
        {
          next: userLogged => {
            this.SessionStorageService.saveUser(userLogged);
            this.router.navigate(['/main']);
            this.formulario.reset();
          },
          error: err => {
            this.error = true;
          }

        }

      )


    }



  }



}
