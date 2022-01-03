import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllTransactionsDetailInResDto } from 'projects/core/src/app/dto/transactions-in/get-all-transactions-detail-in-res-dto';
import { TransactionsDetailInService } from 'projects/core/src/app/services/transactions-detail-in/transactions-detail-in.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-in-detail-view',
  templateUrl: './transactions-in-detail-view.component.html',
  styleUrls: ['./transactions-in-detail-view.component.css']
})
export class TransactionsInDetailViewComponent implements OnInit,OnDestroy { 

  constructor(private router:Router, private transactionsDetailsOutService: TransactionsDetailInService,
    private activeRouter:ActivatedRoute) { }

  obs?:Subscription
  data:GetAllTransactionsDetailInResDto=new GetAllTransactionsDetailInResDto();
  totalData!:number
  
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }
  ngOnInit(): void {
    const headerCode:any= this.activeRouter.snapshot.paramMap.get('code');
    this.obs=this.transactionsDetailsOutService.getByCodeTransactionsIn(headerCode).subscribe(result=>{
      this.data=result
      this.totalData = this.data.getTransactionsDetailsInDataDto.length
    })
  }

}
