import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteStatusesTransactionsResDto } from 'projects/core/src/app/dto/statuses-transactions/delete-statuses-transactions-res-dto';
import { GetAllStatusesTransactionsResDto } from 'projects/core/src/app/dto/statuses-transactions/get-all-statuses-transactions-res-dto';
import { StatusesTransactions } from 'projects/core/src/app/dto/statuses-transactions/statuses-transactions';
import { StatusesTransactionsService } from 'projects/core/src/app/services/statuses-transactions/statuses-transactions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-statuses-transactions-view',
  templateUrl: './statuses-transactions-view.component.html',
  styleUrls: ['./statuses-transactions-view.component.css']
})
export class StatusesTransactionsViewComponent implements OnInit,OnDestroy {

 constructor(private router:Router,private statusesTransactionsService:StatusesTransactionsService) { }
  data:StatusesTransactions[] = []
  obs?:Subscription
  resDeleteStatusesTransactions?:DeleteStatusesTransactionsResDto
  
  gotoInsert(){
    this.router.navigateByUrl('admin/statuses-transactions/new')
  }
  gotoUpdate(i:string):void{
    this.router.navigateByUrl(`admin/statuses-transactions/${i}`)
  }
  delete(id:string){
    if(confirm("Are you sure?")){
      this.statusesTransactionsService.delete(id).subscribe(result=>{
        this.resDeleteStatusesTransactions=result
        window.location.reload()
      })
    }
  }
  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
  ngOnInit(): void {
    this.obs=this.statusesTransactionsService.getAll()?.subscribe(result=>{this.data=result
    console.log(this.data)});
  }
}