import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { code } from 'projects/core/src/app/constant/rolecode';
import { LoginReqDto } from 'projects/core/src/app/dto/login/login-req-dto';
import { AuthService } from 'projects/core/src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private router: Router,private authService: AuthService) { }

  login:LoginReqDto = new LoginReqDto()
  token?:string
  code?:string

  ngOnInit(): void {
  }

  onClick(): void {
    this.authService.login(this.login).subscribe(result =>{
      this.authService.saveUserData(result)
      this.token = this.authService.getToken()
      this.code = this.authService.getRolesCode()
      this.router.navigateByUrl('/admin-dashboard');
      // if(this.code == code.get(1)){
      //   this.router.navigateByUrl('/admin-dashboard');
      // }
      // else if(this.code == code.get(2)){
      //   this.router.navigateByUrl('/')
      // }
      // else{
        
      // }
    })
  }

}
