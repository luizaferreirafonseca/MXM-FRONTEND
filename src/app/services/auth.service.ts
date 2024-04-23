import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/Login';
import { Observable } from 'rxjs';
import { UserLogged } from '../Models/UserLogged';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = 'https://localhost:7081/api/Auth/auth';

  constructor(private http: HttpClient) { }

  login(userLogin: Login): Observable<UserLogged>{
    return this.http.post<UserLogged>(`${this.url}`, userLogin)
  }
}
