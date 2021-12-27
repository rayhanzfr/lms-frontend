import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log(req.url)
    let newReq=req.clone()
    if (req.url!='http://localhost:8888/login') {
      const token:string|undefined = this.authService.getToken()
      newReq = req.clone({setHeaders:{Authorization:`Bearer ${token}`}})
    }
    return next.handle(newReq).pipe(tap({
      next :(success:any)=>{
        let successMessage:HttpErrorResponse=success
        if (successMessage.message) {
        }
      },
      error:(err)=>{
        let errorMessage:HttpErrorResponse=err
      }
    }))
  }
}
