import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  styleUrls: ['./employees-modify.component.css'],
  providers: [MessageService],
})
export class EmployeesModifyComponent implements OnInit, OnDestroy {

  users:Users[] = []
  usersReq : Users = new Users()
  companiesReq : Companies = new Companies()
  companies: Companies[] = []
  employees: Employees = new Employees()
  employeesReq :Employees = new Employees()
  updateResDto :UpdateEmployeesResDto = new UpdateEmployeesResDto()
  saveResDto :SaveEmployeesResDto = new SaveEmployeesResDto()

  isUpdate:boolean = false
  employeesSubs?:Subscription
  usersSubs?:Subscription
  companiesSubs?:Subscription
  constructor(private router: Router,private messageService:MessageService, private activeRoute: ActivatedRoute,private usersService: UsersService, private companiesService:CompaniesService, private employeesService: EmployeesService) { }

  ngOnInit(): void {
    const code:any = this.activeRoute.snapshot.paramMap.get('code');
    if(code){
      this.employeesSubs = this.employeesService.getByCode(code).subscribe(result => {
        this.employees = result
        this.employeesReq = this.employees
        this.usersReq = this.employeesReq.users
        this.isUpdate = true
        this.companiesReq = this.employeesReq.companies
      })
    }
    this.usersService.getAll().subscribe(result=>{
      this.users = result.filter(data => data.roles.rolesCode !="ROLES1")
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
    if(this.employeesReq.employeesPhoneNumber==null||this.employeesReq.employeesFullname==null||this.employeesReq.employeesAddress==null||this.employeesReq.users==null){
      this.messageService.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'Please input all form',
      })
    }
    else{
      if (this.employeesReq.employeesCode) {
        this.employeesSubs=this.employeesService.update(this.employeesReq)?.subscribe(result=>{
          this.updateResDto=result
          if (this.updateResDto) { 
            this.messageService.add({
              severity: 'success',
              summary: 'Updated',
              detail: '' + this.updateResDto.message,
            })
            setTimeout(
              () => 
              this.router.navigateByUrl("/admin/employees"),
              2000,
            )
          }
        })  
      }else{
        this.employeesSubs=this.employeesService.save(this.employeesReq)?.subscribe(result=>{
          this.saveResDto=result
          if (this.saveResDto) { 
            this.messageService.add({
              severity: 'success',
              summary: 'Save',
              detail: '' + this.saveResDto.message,
            })
            setTimeout(
              () => 
              this.router.navigateByUrl("/admin/employees"),
              2000,
            )
          }
        })
      }

    }
  }

  back():void{
    this.router.navigateByUrl('admin/employees')
  }
}
