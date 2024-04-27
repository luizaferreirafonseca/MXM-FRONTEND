import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SessionStorageServico } from '../servicos/session-storage-servico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private sessionStorageServico: SessionStorageServico, private Router: Router){}


  logout(){
    this.sessionStorageServico.logout();
    this.Router.navigate(['/login'])

  }

}
