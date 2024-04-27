import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageServico } from './session-storage-servico';


@Injectable({
  providedIn: 'root'
})
export class TokenServiceService implements HttpInterceptor {

  constructor(private SessionStorageServico: SessionStorageServico) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    const usuarioToken = this.SessionStorageServico.pegarUsuarioLogado()?.token;

    if(usuarioToken){
      const modificadaReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${usuarioToken}`),
      });
      return next.handle(modificadaReq);
    }
    return next.handle(req);
  }
      
    
  
  




}
