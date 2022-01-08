import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DeleteUsersResDto } from 'projects/core/src/app/dto/users/delete-users-res-dto';
import { Users } from 'projects/core/src/app/dto/users/users';
import { UsersService } from 'projects/core/src/app/services/users/users.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class UsersViewComponent implements OnInit {

  data:Users[]=[]
  totalUsers!:number
  resDeleteUsers?:DeleteUsersResDto
  constructor(private router: Router,private usersService: UsersService, private messageService: MessageService,private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(result=>{
      this.data = result.filter(data => data.roles.rolesCode != "ROLES1")
    this.totalUsers = this.data.length
    });
  }
  
  gotoInsert():void{
    this.router.navigateByUrl('/admin/user/new')
  }

  gotoUpdate(code:string):void{
    this.router.navigateByUrl(`admin/user/${code}`)
  }

  delete(id:string){
    if(confirm("Are you sure?")){
      this.usersService.delete(id).subscribe(result=>{
        this.resDeleteUsers=result
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
        this.usersService.delete(id).subscribe((result) => {
          this.resDeleteUsers = result
        })
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have deleted',
        })
        setTimeout(() => this.reloadCurrentRoute(), 1000)
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
