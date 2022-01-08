import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DeleteItemsBrandsResDto } from 'projects/core/src/app/dto/items-brands/delete-items-brands-res-dto';
import { ItemsBrands } from 'projects/core/src/app/dto/items-brands/items-brands';
import { ItemsBrandsService } from 'projects/core/src/app/services/items-brands/items-brands.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-brands-view',
  templateUrl: './items-brands-view.component.html',
  styleUrls: ['./items-brands-view.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ItemsBrandsViewComponent implements OnInit {

  constructor(private itemsBrandsService:ItemsBrandsService,private router:Router, private messageService:MessageService, private confirmationService:ConfirmationService) { }
  data:ItemsBrands[] = []
  totalData!:number
  obs?:Subscription
  resDeleteItemsBrands?:DeleteItemsBrandsResDto
  
  gotoInsert(){
    this.router.navigateByUrl('admin/items-brands/new')
  }
  gotoUpdate(i:string):void{
    this.router.navigateByUrl(`admin/items-brands/${i}`)
  }
  delete(id:string){
    if(confirm("Are you sure?")){
      this.itemsBrandsService.delete(id).subscribe(result=>{
        this.resDeleteItemsBrands=result
        window.location.reload()
      })
    }
  }
  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
  ngOnInit(): void {
    this.obs=this.itemsBrandsService.getAll()?.subscribe(result=>{this.data=result
    console.log(this.data)
    this.totalData=this.data.length;});
  }
  confirm(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this item brand?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.itemsBrandsService.delete(id).subscribe((result) => {
          this.resDeleteItemsBrands = result
        })
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have deleted an item brand',
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
