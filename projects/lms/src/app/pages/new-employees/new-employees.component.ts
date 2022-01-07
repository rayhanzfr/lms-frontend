import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Companies } from 'projects/core/src/app/dto/companies/companies';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { SaveEmployeesResDto } from 'projects/core/src/app/dto/employee/save-employees-res-dto';
import { Users } from 'projects/core/src/app/dto/users/users';
import { AuthService } from 'projects/core/src/app/services/auth/auth.service';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { UsersService } from 'projects/core/src/app/services/users/users.service';

@Component({
  selector: 'app-new-employees',
  templateUrl: './new-employees.component.html',
  styleUrls: ['./new-employees.component.css']
})
export class NewEmployeesComponent implements OnInit {

  employeesReq:Employees= new Employees()
  saveEmployeesRes:SaveEmployeesResDto = new SaveEmployeesResDto()

  users:Users = new Users()
  data:Companies[]=[]
  selectedCompanies:Companies = new Companies()
  constructor(private authService:AuthService,private usersService:UsersService,private router: Router, private companiesService: CompaniesService, private employeesService: EmployeesService
    ) { }

  ngOnInit(): void {
    this.usersService.getById(this.authService.getUsersId()!).subscribe(result => {
      this.users = result
    })
    this.companiesService.getAll().subscribe(result => {
      this.data = result
    })
  }

  onClick():void{
    this.employeesReq.users = this.users
    this.employeesReq.companies = this.selectedCompanies
    console.log(this.employeesReq.companies)
    if (this.employeesReq.companies) { 
      this.employeesService.save(this.employeesReq).subscribe(result=>{
        this.saveEmployeesRes= result
        if(this.saveEmployeesRes){
          this.router.navigateByUrl('/login')
        }
      })
    }
  }
}
