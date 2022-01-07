import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { MessageService } from 'primeng/api'
import { roleCode } from 'projects/core/src/app/constant/rolecode'
import { Employees } from 'projects/core/src/app/dto/employee/employees'
import { LoginReqDto } from 'projects/core/src/app/dto/login/login-req-dto'
import { AuthService } from 'projects/core/src/app/services/auth/auth.service'
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service'

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
    private employeesService: EmployeesService
  ) {}

  login: LoginReqDto = new LoginReqDto()
  token?: string
  code?: string
  user?:string
  data:boolean = true
  role!:string
  employees: Employees=new Employees()

  
  ngOnInit(): void {
  }

  onClick(): void {
    // this.authService.login(this.login).subscribe(result =>{
    //   this.authService.saveUserData(result)
    //   this.token = this.authService.getToken()
    //   this.code = this.authService.getRolesCode()
    //   this.router.navigateByUrl('/admin-dashboard');
    // })

    this.authService.login(this.login).subscribe({
      next: (result) => {
        console.log(result)
        this.authService.saveUserData(result)
        this.token = this.authService.getToken()
        this.code = this.authService.getRolesCode()
        this.user = this.authService.getUsersId()
        if (this.code) {      
          console.log(this.code)
          if (this.code==roleCode.get(1)) {
            this.employeesService.getByUsersId().subscribe({next:data =>{
              this.employees = data
              if(this.employees) {
                  this.router.navigateByUrl('/admin-dashboard')
              }
              else{
                this.router.navigateByUrl('/new-employee')
              }
            }})
          }else if (this.code==roleCode.get(2)) {
            this.employeesService.getByUsersId().subscribe({next:data =>{
              this.employees = data
              if(this.employees) {
                  this.router.navigateByUrl('/dashboard')
              }
              else{
                this.router.navigateByUrl('/new-employee')
              }
            }})
          }
        }
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
