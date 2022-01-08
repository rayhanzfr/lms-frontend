import { CurrencyPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DeleteInvoicesResDto } from 'projects/core/src/app/dto/invoices/delete-invoices-res-dto';
import { Invoices } from 'projects/core/src/app/dto/invoices/invoices';
import { InvoicesService } from 'projects/core/src/app/services/invoices/invoices.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoices-view',
  templateUrl: './invoices-view.component.html',
  styleUrls: ['./invoices-view.component.css'],
  providers: [CurrencyPipe, MessageService,ConfirmationService]
})
export class InvoicesViewComponent implements OnInit,OnDestroy {

  obs?: Subscription
  data: Invoices[] = []
  resDeleteInvoices?:DeleteInvoicesResDto
  totalData!:number

  constructor(private router:Router, private invoicesService: InvoicesService, private messageService: MessageService, private confirmationService:ConfirmationService) { }
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

  ngOnInit(): void {
    this.invoicesService.getAll().subscribe(result => {
      this.data = result
    })
  }

  gotoInsert(){
    this.router.navigateByUrl('admin/invoices/new')
  }

  gotoUpdate(code:string):void{
    this.router.navigateByUrl(`admin/invoices/${code}`)
  }

  delete(id:string){
    if(confirm("Are you sure?")){
      this.invoicesService.delete(id).subscribe(result=>{
        this.resDeleteInvoices=result
        window.location.reload()
      })
    }
  }

  confirm(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this companies?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.invoicesService.delete(id).subscribe((result) => {
          this.resDeleteInvoices = result
        })
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have deleted',
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
