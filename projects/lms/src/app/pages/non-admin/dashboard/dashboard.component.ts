import { Component, OnInit } from '@angular/core';
import { Assets } from 'projects/core/src/app/dto/asset/assets';
import { GetTransactionsOutDataDto } from 'projects/core/src/app/dto/transactions-out/get-transactions-out-data-dto';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { TransactionsDetailOutService } from 'projects/core/src/app/services/transactions-details-out/transactions-details-out.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  getDataTransactionOut:GetTransactionsOutDataDto[]=[]
  getAllAssets:Assets[]=[]

  assetsSubs?:Subscription
  transOutDetailSubs?:Subscription
  constructor(private transactionsDetailOutService: TransactionsDetailOutService, private assetsService: AssetsService) { }

  ngOnInit(): void {
    this.assetsSubs = this.assetsService.getAll().subscribe(result=>
      {
        this.getAllAssets = result.data
      })
  }

}
