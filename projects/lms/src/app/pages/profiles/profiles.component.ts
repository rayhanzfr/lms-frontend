import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  employees?:Employees
  employeesSubs?:Subscription
  constructor(private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.employees= new Employees()
    this.employeesSubs = this.employeesService.getByUsersId().subscribe(employee =>{
      this.employees=employee
    })
  }

  edit(id:string):void{
    this.router.navigateByUrl('/profiles/'+id)
  }

}
