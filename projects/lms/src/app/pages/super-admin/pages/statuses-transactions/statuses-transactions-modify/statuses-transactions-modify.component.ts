import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusesTransactions } from 'projects/core/src/app/dto/statuses-transactions/statuses-transactions';
import { SaveStatusesTransactionsResDto } from 'projects/core/src/app/dto/statuses-transactions/save-statuses-transactions-res-dto';
import { UpdateStatusesTransactionsResDto } from 'projects/core/src/app/dto/statuses-transactions/update-statuses-transactions-res-dto';
import { StatusesTransactionsService } from 'projects/core/src/app/services/statuses-transactions/statuses-transactions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-statuses-transactions-modify',
  templateUrl: './statuses-transactions-modify.component.html',
  styleUrls: ['./statuses-transactions-modify.component.css']
})
export class StatusesTransactionsModifyComponent implements OnInit {

  statusesTransactions?:StatusesTransactions
  statusesTransactionsReq:StatusesTransactions = new StatusesTransactions();
  saveStatusesTransactionsRes:SaveStatusesTransactionsResDto=new SaveStatusesTransactionsResDto();
  updateStatusesTransactionsRes:UpdateStatusesTransactionsResDto=new UpdateStatusesTransactionsResDto();
  statusesTransactionsSubs?:Subscription;
  statusesTransactionsSub?:Subscription;
  constructor(private router:ActivatedRoute, private statusesTransactionsService:StatusesTransactionsService,
    private route:Router) { }
  
  submitData(){
    if (this.statusesTransactionsReq.id) {
      this.statusesTransactionsSubs=this.statusesTransactionsService.update(this.statusesTransactionsReq)?.subscribe(result=>{
        this.updateStatusesTransactionsRes=result
        if (this.updateStatusesTransactionsRes) { 
          this.route.navigateByUrl("admin/statuses-transactions")
        }
      })  
    }else{
      this.statusesTransactionsSubs=this.statusesTransactionsService.save(this.statusesTransactionsReq)?.subscribe(result=>{
        this.saveStatusesTransactionsRes=result
        if (this.saveStatusesTransactionsRes) {
          this.route.navigateByUrl("admin/statuses-transactions")
        }
      })
    }
  }

  back(){
    this.route.navigateByUrl("admin/statuses-transactions");
  }
  ngOnDestroy(): void {
    this.statusesTransactionsSubs?.unsubscribe()
    this.statusesTransactionsSub?.unsubscribe()
  }
  ngOnInit(): void {
    const id:any = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.statusesTransactions=  new StatusesTransactions();
      this.statusesTransactionsSub=this.statusesTransactionsService.getByCode(id).subscribe(result=>{this.statusesTransactions=result
      this.statusesTransactionsReq = this.statusesTransactions
      });
    }
  }

}
