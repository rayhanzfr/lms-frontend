import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { UpdateEmployeesResDto } from 'projects/core/src/app/dto/employee/update-employees-res-dto';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profiles-modify',
  templateUrl: './profiles-modify.component.html',
  styleUrls: ['./profiles-modify.component.css']
})
export class ProfilesModifyComponent implements OnInit {

  employees:Employees = new Employees()
  employeesReq:Employees = new Employees()
  updateResDto:UpdateEmployeesResDto = new UpdateEmployeesResDto()

  empSubs?:Subscription
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private employeesService: EmployeesService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.empSubs = this.employeesService.getById(id).subscribe(employees => {
        this.employees = employees
        this.employeesReq = this.employees
      })
    }
  }

  onSave():void{
    this.empSubs = this.employeesService.update(this.employeesReq).subscribe(result=>{
      this.updateResDto = result
      this.router.navigateByUrl('/profiles')
    })
  }

  back():void{
    this.router.navigateByUrl('/profiles')
  }

}
