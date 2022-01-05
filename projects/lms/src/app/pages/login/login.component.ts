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
  employees: Employees[]=[]

  ngOnInit(): void {
    this.employeesService.getAll().subscribe(result => {
      this.employees = result
    })
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
        this.authService.saveUserData(result)
        this.token = this.authService.getToken()
        this.code = this.authService.getRolesCode()
        this.user = this.authService.getUsersId()
        if (this.code) {      
          console.log(this.code)
          if (this.code==roleCode.get(1)) {
            for(let i =0; i<this.employees.length; i++) {
              if(this.employees[i].users.id == this.user){
                this.data = false
              }
            }
            if(this.data){
              this.router.navigateByUrl('/new-employee')
            }
            else{
              this.router.navigateByUrl('/admin-dashboard')
            }
            console.log("Masuk Admin")
          }else if (this.code==roleCode.get(2)) {
            for(let i =0; i<this.employees.length; i++) {
              if(this.employees[i].users.id == this.user){
                this.data = false
              }
            }
            if(this.data){
              this.router.navigateByUrl('/new-employee')
            }else{
              this.router.navigateByUrl('/dashboard')
            }
            console.log("Masuk Non Admin")
          }
          console.log("Gamasuk")
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
