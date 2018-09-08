import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private token: TokenService, private router: Router) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.token.getToken() != null) {
      const httpHeaders = new HttpHeaders({
        'Authorization' : 'Bearer ' + this.token.getToken()
      });
      req = req.clone({headers: httpHeaders});
    }
    return next.handle(req);
  }
}
