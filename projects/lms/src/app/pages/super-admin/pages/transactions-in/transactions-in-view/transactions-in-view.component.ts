import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllTransactionsInResDto } from 'projects/core/src/app/dto/transactions-in/get-all-transactions-in-res-dto';
import { TransactionsInService } from 'projects/core/src/app/services/transactions-in/transactions-in.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-in-view',
  templateUrl: './transactions-in-view.component.html',
  styleUrls: ['./transactions-in-view.component.css']
})
export class TransactionsInViewComponent implements OnInit, OnDestroy {

  obs?: Subscription
  data: GetAllTransactionsInResDto = new GetAllTransactionsInResDto()
  totalData!:number

  constructor(private router:Router, private transactionsInService: TransactionsInService) { }
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

  ngOnInit(): void {
    this.transactionsInService.getAll().subscribe(result => {
      this.data = result
      this.totalData = this.data.getTransactionsInDataDto.length
    })
  }

  goToInsert(){
    this.router.navigateByUrl('admin/transactions-in/new')
  }

  goToDetail(code:string):void{
    this.router.navigateByUrl(`admin/transactions-in/detail/${code}`)
  }
}
