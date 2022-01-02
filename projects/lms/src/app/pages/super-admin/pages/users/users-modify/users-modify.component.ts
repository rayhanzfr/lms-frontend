import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from 'projects/core/src/app/dto/roles/roles';
import { SaveUsersResDto } from 'projects/core/src/app/dto/users/save-users-res-dto';
import { UpdateUsersResDto } from 'projects/core/src/app/dto/users/update-users-res-dto';
import { Users } from 'projects/core/src/app/dto/users/users';
import { PermissionsService } from 'projects/core/src/app/services/permissions/permissions.service';
import { RolesService } from 'projects/core/src/app/services/roles/roles.service';
import { UsersService } from 'projects/core/src/app/services/users/users.service';
import { Subscription } from 'rxjs';
import {Permissions} from '../../../../../../../../core/src/app/dto/permissions/permissions'

@Component({
  selector: 'app-users-modify',
  templateUrl: './users-modify.component.html',
  styleUrls: ['./users-modify.component.css']
})
export class UsersModifyComponent implements OnInit, OnDestroy {

  users?:Users
  usersReq:Users = new Users()
  saveUsersRes:SaveUsersResDto = new SaveUsersResDto()
  updateUsersRes : UpdateUsersResDto = new UpdateUsersResDto()
  usersSubs?:Subscription
  roles:Roles[]=[]
  rolesReq:Roles = new Roles()

  isUpdate:boolean =false

  selectedRoles:Roles = new Roles()
  rolesSubs?:Subscription
  constructor(private router: Router, private usersService: UsersService, private activatedRoute:ActivatedRoute, private permissionsService:PermissionsService, private rolesService:RolesService) { }
  
  ngOnInit(): void {
    const email = this.activatedRoute.snapshot.paramMap.get('code')
    if(email){
      this.usersSubs = this.usersService.getByEmail(email).subscribe(result=>{
        this.usersReq = result
        this.isUpdate=true
        this.users = result
      })
    }
    this.rolesSubs = this.rolesService.getAll().subscribe(result=>{
      this.roles = result
    })
  }
  
  ngOnDestroy(): void {
   this.usersSubs?.unsubscribe()
   this.rolesSubs?.unsubscribe() 
  }
  sumbit():void{
    this.usersReq.roles = this.rolesReq
    if (this.usersReq.usersEmail == this.users?.usersEmail) {
      this.usersSubs=this.usersService.update(this.usersReq)?.subscribe(result=>{
        this.updateUsersRes=result
        if (this.updateUsersRes) { 
          this.router.navigateByUrl("/admin/user")
        }
      })  
    }else{
      this.usersSubs=this.usersService.save(this.usersReq)?.subscribe(result=>{
        this.saveUsersRes=result
        if (this.saveUsersRes) {
          this.router.navigateByUrl("/admin/user")
        }
      })
    }
  }

  back():void{
    this.router.navigateByUrl('admin/user')
  }

}
