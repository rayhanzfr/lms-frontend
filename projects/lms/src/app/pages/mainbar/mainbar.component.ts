import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { roleCode } from 'projects/core/src/app/constant/rolecode';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { AuthService } from 'projects/core/src/app/services/auth/auth.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { delay, Subscription } from 'rxjs';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.css']
})
export class MainbarComponent implements OnInit, OnDestroy {

  employee?:Employees

  isAdmin:boolean = true
  isNonAdmin:boolean = true
  code!:string
  employeeSubs?:Subscription
  
  constructor(private router: Router, private employeesService: EmployeesService, private authService: AuthService) {
   }
  ngOnDestroy(): void {
    this.employeeSubs?.unsubscribe()
  }

  ngOnInit(): void {

    this.employeeSubs = this.employeesService.getByUsersId().subscribe(result => {
      this.employee = result
    })
    this.code = this.authService.getRolesCode()!
    if (this.code) {      
      console.log(this.code)
      if (this.code==roleCode.get(1)){
        this.isAdmin = false
      }
      if (this.code==roleCode.get(2)){
        this.isNonAdmin = false
      }
    }
  }

  toggleClick(): void {
    const body = document.getElementsByTagName('body')[0]
    if (body.className.match('sidebar-icon-only')) {
      body.classList.remove('sidebar-icon-only')
    }
    else {
      body.classList.add('sidebar-icon-only')
    }
  }

  showSidebar(): void {
    const canvas = document.getElementById('sidebar')
    if (canvas?.className.match('active')) {
      canvas.classList.remove('active')
    }
    else {
      canvas?.classList.add('active')
    }
  }

  inHover(data: any): void {
    const body = document.getElementsByTagName('body')[0]
    if (body.className.match("sidebar-icon-only")) {
      data.classList.add('hover-open')
    }
  }

  outHover(data: any): void {
    const body = document.getElementsByTagName('body')[0]
    if (body.className.match("sidebar-icon-only")) {
      data.classList.remove('hover-open')
    }
  }

  logout(){
    this.authService.clearStorage()
    this.router.navigateByUrl("/login")
  }

}
