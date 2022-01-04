import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllTransactionsDetailsOutResDto } from 'projects/core/src/app/dto/transactions-out/get-all-transactions-details-out-res-dto';
import { TransactionsDetailOutService } from 'projects/core/src/app/services/transactions-details-out/transactions-details-out.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-out-detail-view',
  templateUrl: './transactions-out-detail-view.component.html',
  styleUrls: ['./transactions-out-detail-view.component.css']
})
export class NonTransactionsOutDetailViewComponent implements OnInit,OnDestroy {

  constructor(private router:Router, private transactionsDetailsOutService: TransactionsDetailOutService,
    private activeRouter:ActivatedRoute) { }

  obs?:Subscription
  data:GetAllTransactionsDetailsOutResDto=new GetAllTransactionsDetailsOutResDto();
  totalData!:number
  
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }
  ngOnInit(): void {
    const headerCode:any= this.activeRouter.snapshot.paramMap.get('code');
    this.obs=this.transactionsDetailsOutService.getByCodeTransactionsOut(headerCode).subscribe(result=>{
      this.data=result
      this.totalData = this.data.getTransactionsDetailsOutDataDto.length
    })
  }

}
