import { Component } from '@angular/core';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthServico } from '../servicos/auth.service';
import { SessionStorageServico } from '../servicos/session-storage-servico';
import { Login } from '../modelos/Login';
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

  constructor(private authServico: AuthServico, private SessionStorageServico: SessionStorageServico, private router: Router) { }

  erro: boolean = false;

  formulario = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  })

  sendLogin() {

    if (this.formulario.value.email && this.formulario.value.senha) {
      const login: Login = {
        Email: this.formulario.value.email,
        Senha: this.formulario.value.senha

      }

      this.authServico.login(login).subscribe(
        {
          next: usuarioLogado => {
            this.SessionStorageServico.salvarUsuario(usuarioLogado);
            this.router.navigate(['/pagina-principal']);
            this.formulario.reset();
          },
          error: err => {
            this.erro = true;
          }

        }

      )


    }



  }



}
