import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { MessageService } from 'primeng/api'
import { code } from 'projects/core/src/app/constant/rolecode'
import { LoginReqDto } from 'projects/core/src/app/dto/login/login-req-dto'
import { AuthService } from 'projects/core/src/app/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private router: Router,
    private authService: AuthService,
  ) {}

  login: LoginReqDto = new LoginReqDto()
  token?: string
  code?: string

  ngOnInit(): void {}

  onClick(): void {
    // this.authService.login(this.login).subscribe(result =>{
    //   this.authService.saveUserData(result)
    //   this.token = this.authService.getToken()
    //   this.code = this.authService.getRolesCode()
    //   this.router.navigateByUrl('/admin-dashboard');
    // })
    this.authService.login(this.login).subscribe({
      next: (result) => {
        this.authService.saveUserData(result)
        this.token = this.authService.getToken()
        this.code = this.authService.getRolesCode()
        this.router.navigateByUrl('/admin-dashboard')
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: '' + err.error.msg,
        })
        console.log(err.error.msg)
      },
    })
  }
}
