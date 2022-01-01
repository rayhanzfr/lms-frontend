import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { DeleteUsersResDto } from 'projects/core/src/app/dto/users/delete-users-res-dto';
import { Users } from 'projects/core/src/app/dto/users/users';
import { UsersService } from 'projects/core/src/app/services/users/users.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  data:Users[]=[]
  totalUsers!:number
  resDeleteUsers?:DeleteUsersResDto
  constructor(private router: Router,private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(result=>{
      this.data = result 
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
}
