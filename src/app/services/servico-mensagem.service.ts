import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensagem } from '../Models/Mensagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoMensagemService {

  private url:string = 'https://localhost:7081/mxm-api/SendEmail';

  

  constructor(private http:HttpClient) { }


  enviarMensagem(mensagem: Mensagem): Observable<any> {
    return this.http.post(this.url, mensagem).pipe(
      res => res,
      error => error
    )
  }





  
  

}



