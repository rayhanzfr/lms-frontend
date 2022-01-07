import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { finalize, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{


  activeRequests: number = 0;
  constructor(private authService:AuthService, private loadingService:LoadingService, private router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | undefined = this.authService.getToken()
    const newReq = req.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } })
    if (this.activeRequests === 0) {
      this.loadingService.startLoading();
    }

    this.activeRequests++;
    return next.handle(newReq).pipe(
      tap( 
        {
        next: (successed: any) => {
          let data: HttpResponse<any> = successed
          if (data.body && data.body.msg) {
            console.log(successed)
          }
        },
        error: (err) => {
          let data: HttpErrorResponse = err
        }
      }),
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loadingService.stopLoading();
        }
      }))
  }
}
