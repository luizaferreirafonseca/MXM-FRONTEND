import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';


@Injectable({
  providedIn: 'root'
})
export class TokenServiceService implements HttpInterceptor {

  constructor(private SessionStorageService: SessionStorageService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    const userToken = this.SessionStorageService.getLoggedUser()?.token;

    if(userToken){
      const modifiedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${userToken}`),
      });
      return next.handle(modifiedReq);
    }
    return next.handle(req);
  }
      
    
  
  




}
