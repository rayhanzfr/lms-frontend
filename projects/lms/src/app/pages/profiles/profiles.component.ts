import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Companies } from 'projects/core/src/app/dto/companies/companies';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { Roles } from 'projects/core/src/app/dto/roles/roles';
import { Users } from 'projects/core/src/app/dto/users/users';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { RolesService } from 'projects/core/src/app/services/roles/roles.service';
import { UsersService } from 'projects/core/src/app/services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  companies?:Companies
  employees?:Employees
  employeesSubs?:Subscription
  companiesSubs?:Subscription
  users?:Users
  usersSubs?:Subscription
  roles?:Roles
  rolesSubs?:Subscription
  constructor(private employeesService: EmployeesService, private router: Router, private companiesService:CompaniesService, private usersService:UsersService, private rolesService:RolesService) { }

  ngOnInit(): void {
    this.employees= new Employees()
    this.employeesSubs = this.employeesService.getByUsersId().subscribe(employee =>{
      this.employees=employee
      this.companiesSubs = this.companiesService.getByCode(this.employees.companies.companiesCode).subscribe(companies=>{
        this.companies = companies
      })
      this.usersSubs = this.usersService.getByEmail(this.employees.users.usersEmail).subscribe(users=>{
        this.users = users
        this.rolesSubs = this.rolesService.getByCode(this.users.roles.rolesCode).subscribe(roles=>{
          this.roles=roles
        })
      })
    })
  }

  edit(id:string):void{
    this.router.navigateByUrl('/profiles/'+id)
  }

}
