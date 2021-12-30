import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Companies } from 'projects/core/src/app/dto/companies/companies';
import { Users } from 'projects/core/src/app/dto/users/users';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';
import { UsersService } from 'projects/core/src/app/services/users/users.service';

@Component({
  selector: 'app-employees-modify',
  templateUrl: './employees-modify.component.html',
  styleUrls: ['./employees-modify.component.css']
})
export class EmployeesModifyComponent implements OnInit {

  users:Users[] = []
  companies: Companies[] = []
  selectedUsers?:string
  selectedCompanies?:string
  constructor(private router: Router, private usersService: UsersService, private companiesService:CompaniesService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(users => {
      this.users = users
    })
    this.companiesService.getAll().subscribe(companies => {
      this.companies = companies
    })
  }
  back():void{
    this.router.navigateByUrl('admin/user')
  }
}
