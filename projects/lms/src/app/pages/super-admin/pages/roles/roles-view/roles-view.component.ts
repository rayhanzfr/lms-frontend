import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeleteRolesResDto } from 'projects/core/src/app/dto/roles/delete-roles-res-dto';
import { GetAllRolesResDto } from 'projects/core/src/app/dto/roles/get-all-roles-res-dto';
import { Roles } from 'projects/core/src/app/dto/roles/roles';
import { RolesService } from 'projects/core/src/app/services/roles/roles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roles-view',
  templateUrl: './roles-view.component.html',
  styleUrls: ['./roles-view.component.css']
})
export class RolesViewComponent implements OnInit,OnDestroy {

 constructor(private rolesService:RolesService) { }
  data?:GetAllRolesResDto
  obs?:Subscription
  resDeleteRoles?:DeleteRolesResDto
  
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
    this.data=new GetAllRolesResDto();
    this.obs=this.rolesService.getAll()?.subscribe(result=>{this.data=result});
  }

}
