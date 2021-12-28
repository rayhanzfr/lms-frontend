import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteInvoicesResDto } from 'projects/core/src/app/dto/invoices/delete-invoices-res-dto';
import { Invoices } from 'projects/core/src/app/dto/invoices/invoices';
import { InvoicesService } from 'projects/core/src/app/services/invoices/invoices.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoices-view',
  templateUrl: './invoices-view.component.html',
  styleUrls: ['./invoices-view.component.css']
})
export class InvoicesViewComponent implements OnInit,OnDestroy {

  obs?: Subscription
  data: Invoices[] = []
  resDeleteRoles?:DeleteInvoicesResDto

  constructor(private router:Router, private invoicesService: InvoicesService) { }
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

  ngOnInit(): void {
    this.invoicesService.getAll().subscribe(result => this.data = result)
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
        this.resDeleteRoles=result
        window.location.reload()
      })
    }
  }

}
