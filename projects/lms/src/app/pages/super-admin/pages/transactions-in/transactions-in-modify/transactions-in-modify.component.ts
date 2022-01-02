import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusesTransactions } from 'projects/core/src/app/dto/statuses-transactions/statuses-transactions';
import { SaveTransactionsDetailsInReqDto } from 'projects/core/src/app/dto/transactions-in/save-transactions-details-in-req-dto';
import { SaveTransactionsInReqDto } from 'projects/core/src/app/dto/transactions-in/save-transactions-in-req-dto';
import { GetAllTransactionsDetailsOutResDto } from 'projects/core/src/app/dto/transactions-out/get-all-transactions-details-out-res-dto';
import { GetAllTransactionsOutResDto } from 'projects/core/src/app/dto/transactions-out/get-all-transactions-out-res-dto';
import { GetTransactionsDetailsOutDataDto } from 'projects/core/src/app/dto/transactions-out/get-transactions-details-out-data-dto';
import { GetTransactionsOutDataDto } from 'projects/core/src/app/dto/transactions-out/get-transactions-out-data-dto';
import { StatusesTransactionsService } from 'projects/core/src/app/services/statuses-transactions/statuses-transactions.service';
import { TransactionsDetailOutService } from 'projects/core/src/app/services/transactions-details-out/transactions-details-out.service';
import { TransactionsOutService } from 'projects/core/src/app/services/transactions-out/transactions-out.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-in-modify',
  templateUrl: './transactions-in-modify.component.html',
  styleUrls: ['./transactions-in-modify.component.css']
})
export class TransactionsInModifyComponent implements OnInit {

  constructor(private router:Router,private transactionOutService:TransactionsOutService,
    private transactionsDetailOutService:TransactionsDetailOutService,private statusesTransactionsService:StatusesTransactionsService) { }

  saveTransactionsInReqDto:SaveTransactionsInReqDto=new SaveTransactionsInReqDto();
  saveTransactionDetailInReqDto:SaveTransactionsDetailsInReqDto=new SaveTransactionsDetailsInReqDto();
  listSaveTransactionsDetailInReqDto:SaveTransactionsDetailsInReqDto[]=[]
  getAllTransactionsOutResDto?:GetAllTransactionsOutResDto
  getAllTransactionsDetailsOutResDto:GetAllTransactionsDetailsOutResDto=new GetAllTransactionsDetailsOutResDto();
  transactionsOut:GetTransactionsOutDataDto[]=[]
  transactionsDetailOut:GetTransactionsDetailsOutDataDto[]=[]
  transactionsOutSelected!:GetTransactionsOutDataDto
  transactionsOutSubs?:Subscription;
  transactionsDetailOutSubs?:Subscription;
  listStatusesTransactions:StatusesTransactions[]=[]
  statusesTransactionsSubs?:Subscription;
  ngOnInit(): void {
    this.statusesTransactionsSubs=this.statusesTransactionsService.getAll().subscribe(result=>{
      this.listStatusesTransactions=result
    })
    this.transactionsOutSubs=this.transactionOutService.getAll().subscribe(result=>{
      this.getAllTransactionsOutResDto=result
      this.transactionsOut=this.getAllTransactionsOutResDto.getTransactionsOutDataDto
    })
  }
  findDetails(){
    const code=this.transactionsOutSelected.transactionsOutCode
    this.transactionsDetailOutSubs=this.transactionsDetailOutService.getByCodeTransactionsOut(code).subscribe(result=>{
      this.getAllTransactionsDetailsOutResDto=result
      this.transactionsDetailOut=this.getAllTransactionsDetailsOutResDto.getTransactionsDetailsOutDataDto
      for (let i = 0; i < this.transactionsDetailOut.length; i++) {
        this.saveTransactionDetailInReqDto=new SaveTransactionsDetailsInReqDto();
        this.saveTransactionDetailInReqDto.assetsName = this.transactionsDetailOut[i].assetsName;
        if (this.transactionsDetailOut[i].employeesCode) {
          this.saveTransactionDetailInReqDto.employeesCode=this.transactionsDetailOut[i].employeesCode;
        }
        if (this.transactionsDetailOut[i].locationsCode) {
          this.saveTransactionDetailInReqDto.locationsCode=this.transactionsDetailOut[i].locationsCode;
        }
        this.listSaveTransactionsDetailInReqDto.push(this.saveTransactionDetailInReqDto)
      }
    })
  }
  delete(rowIndex:number){
    this.listSaveTransactionsDetailInReqDto=this.listSaveTransactionsDetailInReqDto.filter(result=>
      this.listSaveTransactionsDetailInReqDto[rowIndex].assetsName != result.assetsName)
  }

}
