import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteEmployeesResDto } from 'projects/core/src/app/dto/employee/delete-employees-res-dto';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';

@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.css']
})
export class EmployeesViewComponent implements OnInit {

  data:Employees[] = []
  totalEmployees!:number
  resDeleteEmployees?:DeleteEmployeesResDto
  constructor(private employeesService:EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.employeesService.getAll().subscribe(result => {
      this.data = result
      this.totalEmployees = this.data.length
    })
  }
  gotoInsert():void{
    this.router.navigateByUrl('admin/employees/new')
  }

  gotoUpdate(code:string):void{
    this.router.navigateByUrl(`admin/employees/${code}`)
  }

  delete(id:string){
    if(confirm("Are you sure?")){
      this.employeesService.delete(id).subscribe(result=>{
        this.resDeleteEmployees=result
        window.location.reload()
      })
    }
  }
}
