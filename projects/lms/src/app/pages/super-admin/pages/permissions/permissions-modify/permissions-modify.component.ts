import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Permissions } from 'projects/core/src/app/dto/permissions/permissions';
import { SavePermissionsResDto } from 'projects/core/src/app/dto/permissions/save-permissions-res-dto';
import { UpdatePermissionsResDto } from 'projects/core/src/app/dto/permissions/update-permissions-res-dto';
import { PermissionsService } from 'projects/core/src/app/services/permissions/permissions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permissions-modify',
  templateUrl: './permissions-modify.component.html',
  styleUrls: ['./permissions-modify.component.css']
})
export class PermissionsModifyComponent implements OnInit {

  permissions?:Permissions
  permissionsReq:Permissions = new Permissions();
  savePermissionsRes:SavePermissionsResDto=new SavePermissionsResDto();
  updatePermissionsRes:UpdatePermissionsResDto=new UpdatePermissionsResDto();
  permissionsSubs?:Subscription;
  permissionsSub?:Subscription;
  constructor(private router:ActivatedRoute, private permissionsService:PermissionsService,
    private route:Router) { }
  
  submitData(){
    if (this.permissionsReq.id) {
      this.permissionsSubs=this.permissionsService.update(this.permissionsReq)?.subscribe(result=>{
        this.updatePermissionsRes=result
        if (this.updatePermissionsRes) { 
          this.route.navigateByUrl("admin/permissions")
        }
      })  
    }else{
      this.permissionsSubs=this.permissionsService.save(this.permissionsReq)?.subscribe(result=>{
        this.savePermissionsRes=result
        if (this.savePermissionsRes) {
          this.route.navigateByUrl("admin/permissions")
        }
      })
    }
  }

  back(){
    this.route.navigateByUrl("admin/permissions");
  }
  ngOnDestroy(): void {
    this.permissionsSubs?.unsubscribe()
    this.permissionsSub?.unsubscribe()
  }
  ngOnInit(): void {
    const id:any = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.permissions=  new Permissions();
      this.permissionsSub=this.permissionsService.getById(id).subscribe(result=>{this.permissions=result
      this.permissionsReq = this.permissions
      });
    }
  }
}
