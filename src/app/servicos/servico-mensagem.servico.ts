import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensagem } from '../modelos/Mensagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoMensagemServico {

  private url:string = 'https://mxm-api.marcusvogado.com/api/SendEmail/send';

  

  constructor(private http:HttpClient) { }


  enviarMensagem(mensagem: Mensagem): Observable<any> {
    return this.http.post(this.url, mensagem).pipe(
      res => res,
      error => error
    )
  }





  
  

}



