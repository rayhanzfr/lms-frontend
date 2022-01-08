import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Confirmation, ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DeleteEmployeesResDto } from 'projects/core/src/app/dto/employee/delete-employees-res-dto';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';

@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class EmployeesViewComponent implements OnInit {

  data:Employees[] = []
  totalEmployees!:number
  resDeleteEmployees?:DeleteEmployeesResDto
  constructor(private employeesService:EmployeesService, private router: Router, private messageService:MessageService, private confirmationService:ConfirmationService) { }

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
  confirm(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this companies?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.employeesService.delete(id).subscribe((result) => {
          this.resDeleteEmployees = result
        })
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have deleted',
        })
        setTimeout(() => this.reloadCurrentRoute(), 2000)
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            })
            break
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            })
            break
        }
      },
    })
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
}
