import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllTransactionsOutResDto } from 'projects/core/src/app/dto/transactions-out/get-all-transactions-out-res-dto';
import { TransactionsOutService } from 'projects/core/src/app/services/transactions-out/transactions-out.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-out-view',
  templateUrl: './transactions-out-view.component.html',
  styleUrls: ['./transactions-out-view.component.css']
})
export class TransactionsOutViewComponent implements OnInit, OnDestroy {

  obs?: Subscription
  data: GetAllTransactionsOutResDto = new GetAllTransactionsOutResDto()
  totalData!:number

  constructor(private router:Router, private transactionsOutService: TransactionsOutService) { }
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

  ngOnInit(): void {
    this.transactionsOutService.getAll().subscribe(result => {
      this.data = result
      this.totalData = this.data.getTransactionsOutDataDto.length
    })
  }

  gotoInsert(){
    this.router.navigateByUrl('admin/transactions-out/new')
  }

  goToDetail(code:string):void{
    this.router.navigateByUrl(`admin/transactions-out/detail/${code}`)
  }
}
