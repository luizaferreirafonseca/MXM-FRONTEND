import { Component } from '@angular/core';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServico } from '../servicos/auth.service';
import { SessionStorageServico } from '../servicos/session-storage-servico';
import { Login } from '../Modelos/Login';
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
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required])
  })

  sendLogin() {

    if (this.formulario.valid) {
      const login: Login = {
        Email: this.formulario.value.email || '',
        Senha: this.formulario.value.senha || '',

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
