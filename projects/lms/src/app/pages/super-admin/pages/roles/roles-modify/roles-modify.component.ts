import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from 'projects/core/src/app/dto/roles/roles';
import { SaveRolesResDto } from 'projects/core/src/app/dto/roles/save-roles-res-dto';
import { UpdateRolesResDto } from 'projects/core/src/app/dto/roles/update-roles-res-dto';
import { RolesService } from 'projects/core/src/app/services/roles/roles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roles-modify',
  templateUrl: './roles-modify.component.html',
  styleUrls: ['./roles-modify.component.css']
})
export class RolesModifyComponent implements OnInit {

  roles?:Roles
  rolesReq:Roles = new Roles();
  saveRolesRes:SaveRolesResDto=new SaveRolesResDto();
  updateRolesRes:UpdateRolesResDto=new UpdateRolesResDto();
  rolesSubs?:Subscription;
  rolesSub?:Subscription;
  constructor(private router:ActivatedRoute, private rolesService:RolesService,
    private route:Router) { }
  
  submitData(){
    if (this.rolesReq.id) {
      this.rolesSubs=this.rolesService.update(this.rolesReq)?.subscribe(result=>{
        this.updateRolesRes=result
        if (this.updateRolesRes) { 
          this.route.navigateByUrl("admin/roles")
        }
      })  
    }else{
      this.rolesSubs=this.rolesService.save(this.rolesReq)?.subscribe(result=>{
        this.saveRolesRes=result
        if (this.saveRolesRes) {
          this.route.navigateByUrl("admin/roles")
        }
      })
    }
  }

  back(){
    this.route.navigateByUrl("admin/roles");
  }
  ngOnDestroy(): void {
    this.rolesSubs?.unsubscribe()
    this.rolesSub?.unsubscribe()
  }
  ngOnInit(): void {
    const id:any = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.roles=  new Roles();
      this.rolesSub=this.rolesService.getByCode(id).subscribe(result=>{this.roles=result
      this.rolesReq = this.roles
      });
    }
  }

}
