import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Companies } from 'projects/core/src/app/dto/companies/companies';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
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
  constructor(private employeesService: EmployeesService, private router: Router, private companiesService:CompaniesService) { }

  ngOnInit(): void {
    this.employees= new Employees()
    this.employeesSubs = this.employeesService.getByUsersId().subscribe(employee =>{
      this.employees=employee
    })
    this.companiesSubs = this.companiesService.getById(this.employees?.companies?.id).subscribe(companies =>{
      this.companies = companies
    })
  }

  edit(id:string):void{
    this.router.navigateByUrl('/profiles/'+id)
  }

}
