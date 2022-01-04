import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionsRoles } from 'projects/core/src/app/dto/permissions-roles/permissions-roles';
import { DeleteRolesResDto } from 'projects/core/src/app/dto/roles/delete-roles-res-dto';
import { Roles } from 'projects/core/src/app/dto/roles/roles';
import { PermissionsRolesService } from 'projects/core/src/app/services/permissions-roles/permissions-roles.service';
import { PermissionsService } from 'projects/core/src/app/services/permissions/permissions.service';
import { RolesService } from 'projects/core/src/app/services/roles/roles.service';
import { Subscription } from 'rxjs';
import { Permissions } from 'projects/core/src/app/dto/permissions/permissions';

@Component({
  selector: 'app-roles-view',
  templateUrl: './roles-view.component.html',
  styleUrls: ['./roles-view.component.css']
})
export class RolesViewComponent implements OnInit,OnDestroy {

 constructor(private router:Router,private rolesService:RolesService, private permissionsService:PermissionsService, private permissionsRolesService:PermissionsRolesService) { }
  data:Roles[] = []
  permissionData:Permissions[] = []
  permissionRolesData:PermissionsRoles [] = []
  totalData!:number
  permissionsSubs?:Subscription
  permissionsRolesSubs?:Subscription
  obs?:Subscription
  resDeleteRoles?:DeleteRolesResDto
  
  gotoInsert(){
    this.router.navigateByUrl('admin/roles/new')
  }
  gotoUpdate(i:string):void{
    this.router.navigateByUrl(`admin/roles/${i}`)
  }
  delete(id:string){
    if(confirm("Are you sure?")){
      this.rolesService.delete(id).subscribe(result=>{
        this.resDeleteRoles=result
        window.location.reload()
      })
    }
  }
  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
  ngOnInit(): void {
    this.obs=this.rolesService.getAll()?.subscribe(result=>{this.data=result
    console.log(this.data)
    this.totalData=this.data.length;
    });
    this.permissionsSubs = this.permissionsService.getAll()?.subscribe(result=>{
      this.permissionData = result
    })
    this.permissionsRolesSubs = this.permissionsRolesService.getAll()?.subscribe(result=>{
      this.permissionRolesData = result
    })
  }

}
