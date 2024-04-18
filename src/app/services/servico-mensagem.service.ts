import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensagem } from '../Models/Mensagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoMensagemService {

  private url:string = ''

  constructor(private http:HttpClient) { }

  enviarMensagem(mensagem: Mensagem): Observable<any> {
    return this.http.post<any>(this.url, mensagem);
  }

}



