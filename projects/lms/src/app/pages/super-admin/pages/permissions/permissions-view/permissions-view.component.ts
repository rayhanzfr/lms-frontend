import { Component, OnInit } from '@angular/core';
import { DeletePermissionsResDto } from 'projects/core/src/app/dto/permissions/delete-permissions-res-dto';
import { Permissions } from 'projects/core/src/app/dto/permissions/permissions';
import { PermissionsService } from 'projects/core/src/app/services/permissions/permissions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permissions-view',
  templateUrl: './permissions-view.component.html',
  styleUrls: ['./permissions-view.component.css']
})
export class PermissionsViewComponent implements OnInit {

  constructor(private permissionsService:PermissionsService) { }
  data:Permissions[] = []
  obs?:Subscription
  resDeletePermissions?:DeletePermissionsResDto
  
  delete(id:string){
    if(confirm("Are you sure?")){
      this.permissionsService.delete(id).subscribe(result=>{
        this.resDeletePermissions=result
        window.location.reload()
      })
    }
  }
  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
  ngOnInit(): void {
    this.obs=this.permissionsService.getAll()?.subscribe(result=>{this.data=result
    console.log(this.data)});
  }


}
