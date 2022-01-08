import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DeleteItemsTypesResDto } from 'projects/core/src/app/dto/items-types/delete-items-types-res-dto';
import { ItemsTypes } from 'projects/core/src/app/dto/items-types/items-types';
import { ItemsTypesService } from 'projects/core/src/app/services/items-types/items-types.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-types-view',
  templateUrl: './items-types-view.component.html',
  styleUrls: ['./items-types-view.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class ItemsTypesViewComponent implements OnInit {

  constructor(private itemsTypesService:ItemsTypesService,private router:Router, private messageService:MessageService, private confirmationService:ConfirmationService) { }
  data:ItemsTypes[] = []
  totalData!:number
  obs?:Subscription
  resDeleteItemsTypes?:DeleteItemsTypesResDto
  
  gotoInsert(){
    this.router.navigateByUrl('admin/items-types/new')
  }
  gotoUpdate(i:string):void{
    this.router.navigateByUrl(`admin/items-types/${i}`)
  }
  delete(id:string){
    if(confirm("Are you sure?")){
      this.itemsTypesService.delete(id).subscribe(result=>{
        this.resDeleteItemsTypes=result
        window.location.reload()
      })
    }
  }
  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
  ngOnInit(): void {
    this.obs=this.itemsTypesService.getAll()?.subscribe(result=>{this.data=result
    console.log(this.data)
    this.totalData=this.data.length;});
  }

  confirm(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this item?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.itemsTypesService.delete(id).subscribe((result) => {
          this.resDeleteItemsTypes = result
        })
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have deleted an item',
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
