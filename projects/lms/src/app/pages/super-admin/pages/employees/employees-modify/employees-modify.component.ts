import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Companies } from 'projects/core/src/app/dto/companies/companies';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { SaveEmployeesResDto } from 'projects/core/src/app/dto/employee/save-employees-res-dto';
import { UpdateEmployeesResDto } from 'projects/core/src/app/dto/employee/update-employees-res-dto';
import { Users } from 'projects/core/src/app/dto/users/users';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { UsersService } from 'projects/core/src/app/services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-modify',
  templateUrl: './employees-modify.component.html',
  styleUrls: ['./employees-modify.component.css']
})
export class EmployeesModifyComponent implements OnInit, OnDestroy {

  users:Users[] = []
  usersReq : Users = new Users()
  companiesReq : Companies = new Companies()
  companies: Companies[] = []
  employees?: Employees
  employeesReq :Employees = new Employees()
  updateResDto :UpdateEmployeesResDto = new UpdateEmployeesResDto()
  saveResDto :SaveEmployeesResDto = new SaveEmployeesResDto()

  isUpdate:boolean = false
  employeesSubs?:Subscription
  usersSubs?:Subscription
  companiesSubs?:Subscription
  constructor(private router: Router, private activeRoute: ActivatedRoute,private usersService: UsersService, private companiesService:CompaniesService, private employeesService: EmployeesService) { }

  ngOnInit(): void {
    const code:any = this.activeRoute.snapshot.paramMap.get('code');
    if(code){
      this.employees = new Employees();
      this.employeesSubs = this.employeesService.getByCode(code).subscribe(result => {
        this.employees = result
        this.employeesReq = this.employees
        this.isUpdate = true
      })
    }
    this.usersService.getAll().subscribe(result=>{
      this.users = result
    })
    this.companiesService.getAll().subscribe(result =>{
      this.companies = result
    })
    
  }
  
  ngOnDestroy(): void {
   this.usersSubs?.unsubscribe()
   this.employeesSubs?.unsubscribe()
   this.companiesSubs?.unsubscribe() 
  }
  sumbit():void{
    this.employeesReq.companies = this.companiesReq
    this.employeesReq.users = this.usersReq
    if (this.employeesReq.employeesCode == this.employees?.employeesCode) {
      this.employeesSubs=this.employeesService.update(this.employeesReq)?.subscribe(result=>{
        this.updateResDto=result
        if (this.updateResDto) { 
          this.router.navigateByUrl("/admin/employees")
        }
      })  
    }else{
      this.employeesSubs=this.employeesService.save(this.employeesReq)?.subscribe(result=>{
        this.saveResDto=result
        if (this.saveResDto) { 
          this.router.navigateByUrl("/admin/employees")
        }
      })
    }
  }

  back():void{
    this.router.navigateByUrl('admin/employees')
  }
}
