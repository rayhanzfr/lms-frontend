import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Invoices } from 'projects/core/src/app/dto/invoices/invoices';
import { SaveInvoicesResDto } from 'projects/core/src/app/dto/invoices/save-invoices-res-dto';
import { UpdateInvoicesResDto } from 'projects/core/src/app/dto/invoices/update-invoices-res-dto';
import { InvoicesService } from 'projects/core/src/app/services/invoices/invoices.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoices-modify',
  templateUrl: './invoices-modify.component.html',
  styleUrls: ['./invoices-modify.component.css'],
  providers: [MessageService]
})
export class InvoicesModifyComponent implements OnInit, OnDestroy {

  invoices?:Invoices
  invoicesReq:Invoices = new Invoices();
  saveInvoicesRes:SaveInvoicesResDto = new SaveInvoicesResDto();
  updateInvoicesRes:UpdateInvoicesResDto = new UpdateInvoicesResDto();
  invoicesSubs?:Subscription;
  invoicesSub?:Subscription;

  isHide=false
  invoicesCode!:string

  constructor(private route: Router, private router:ActivatedRoute, private invoicesService:InvoicesService, private messageService:MessageService) { }
  ngOnDestroy(): void {
    this.invoicesSubs?.unsubscribe()
    this.invoicesSub?.unsubscribe()
  }

  ngOnInit(): void {
    const code:any = this.router.snapshot.paramMap.get('code');
    if (code) {
      this.invoices = new Invoices();
      this.invoicesSub = this.invoicesService.getByCode(code).subscribe(result=>{this.invoices = result
      this.invoicesReq = this.invoices
      this.invoicesCode = code
      this.isHide=true
      });
    }
  }

  submitData(){
    if (this.invoicesReq.invoicesCode) {
      this.invoicesSubs = this.invoicesService.update(this.invoicesReq)?.subscribe(result=>{
        this.updateInvoicesRes=result
        if (this.updateInvoicesRes) { 
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: '' + this.updateInvoicesRes.message,
          })
          setTimeout(
            () => 
            this.route.navigateByUrl("admin/invoices"),
            2000,
          )
        }
      })  
    }else{
      this.invoicesSubs=this.invoicesService.save(this.invoicesReq)?.subscribe(result=>{
        this.saveInvoicesRes=result
        if (this.saveInvoicesRes) {
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: '' + this.saveInvoicesRes.message,
          })
          setTimeout(
            () => 
            this.route.navigateByUrl("admin/invoices"),
            2000,
          )
        }
      })
    }
  }

  back(){
    this.route.navigateByUrl("admin/invoices")
  }

}
