import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SessionStorageService } from '../services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private sessionStorageService: SessionStorageService, private Router: Router){}


  logout(){
    this.sessionStorageService.logout();
    this.Router.navigate(['/login'])

  }

}
