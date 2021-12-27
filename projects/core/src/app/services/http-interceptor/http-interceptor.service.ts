import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private authService:AuthService,
    // private toastr:ToastrService
    ) { }
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
          // this.toastr.success(success)
        }
      },
      error:(err)=>{
        let errorMessage:HttpErrorResponse=err
        // this.toastr.error(errorMessage.error.message)
      }
    }))
  }
}
