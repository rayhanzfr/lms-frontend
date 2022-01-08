import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { DeleteItemsResDto } from 'projects/core/src/app/dto/items/delete-items-res-dto';
import { Items } from 'projects/core/src/app/dto/items/items';
import { AuthService } from 'projects/core/src/app/services/auth/auth.service';
import { ItemsService } from 'projects/core/src/app/services/items/items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class ItemsViewComponent implements OnInit {

  constructor(private itemsService:ItemsService,private router:Router,
    private authService:AuthService, private messageService: MessageService, private confirmationService:ConfirmationService) { }
  data:Items[] = []
  totalData!:number
  obs?:Subscription
  resDeleteItems?:DeleteItemsResDto
  
  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
  ngOnInit(): void {
    const token = this.authService.getToken()
    if (token) {
      this.obs=this.itemsService.getAll()?.subscribe(result=>{this.data=result
      console.log(this.data)
      this.totalData=this.data.length});
    }else{
      this.authService.clearStorage();
      this.router.navigateByUrl("/login")
    }
  }

  gotoInsert(){
    this.router.navigateByUrl('admin/items/new')
  }
  gotoUpdate(i:string):void{
    this.router.navigateByUrl(`admin/items/${i}`)
  }
  delete(id:string){
    if(confirm("Are you sure?")){
      this.itemsService.delete(id).subscribe(result=>{
        this.resDeleteItems=result
        window.location.reload()
      })
    }
  }
 

  confirm(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this item?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.itemsService.delete(id).subscribe((result) => {
          this.resDeleteItems = result
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
