import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { statusesInOutCode } from 'projects/core/src/app/constant/statuses-in-out-code';
import { Assets } from 'projects/core/src/app/dto/asset/assets';
import { StatusesTransactions } from 'projects/core/src/app/dto/statuses-transactions/statuses-transactions';
import { SaveFullTransactionsInReqDto } from 'projects/core/src/app/dto/transactions-in/save-full-transactions-in-req-dto';
import { SaveFullTransactionsInResDto } from 'projects/core/src/app/dto/transactions-in/save-full-transactions-in-res-dto';
import { SaveTransactionsDetailsInReqDto } from 'projects/core/src/app/dto/transactions-in/save-transactions-details-in-req-dto';
import { SaveTransactionsInReqDto } from 'projects/core/src/app/dto/transactions-in/save-transactions-in-req-dto';
import { GetAllTransactionsDetailsOutResDto } from 'projects/core/src/app/dto/transactions-out/get-all-transactions-details-out-res-dto';
import { GetAllTransactionsOutResDto } from 'projects/core/src/app/dto/transactions-out/get-all-transactions-out-res-dto';
import { GetTransactionsDetailsOutDataDto } from 'projects/core/src/app/dto/transactions-out/get-transactions-details-out-data-dto';
import { GetTransactionsOutDataDto } from 'projects/core/src/app/dto/transactions-out/get-transactions-out-data-dto';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { StatusesTransactionsService } from 'projects/core/src/app/services/statuses-transactions/statuses-transactions.service';
import { TransactionsDetailOutService } from 'projects/core/src/app/services/transactions-details-out/transactions-details-out.service';
import { TransactionsInService } from 'projects/core/src/app/services/transactions-in/transactions-in.service';
import { TransactionsOutService } from 'projects/core/src/app/services/transactions-out/transactions-out.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-in-modify',
  templateUrl: './transactions-in-modify.component.html',
  styleUrls: ['./transactions-in-modify.component.css'],
  providers: [MessageService]
})
export class TransactionsInModifyComponent implements OnInit, OnDestroy{

  constructor(private router:Router,private transactionOutService:TransactionsOutService,
    private transactionsDetailOutService:TransactionsDetailOutService,private statusesTransactionsService:StatusesTransactionsService,
    private assetsService:AssetsService, private transactionsInService:TransactionsInService, private messageService: MessageService) { }

  saveFullTransactionsInReqDto:SaveFullTransactionsInReqDto=new SaveFullTransactionsInReqDto();
  saveTransactionsInReqDto:SaveTransactionsInReqDto=new SaveTransactionsInReqDto();
  saveTransactionDetailInReqDto:SaveTransactionsDetailsInReqDto=new SaveTransactionsDetailsInReqDto();
  saveFullTransactionsInResDto:SaveFullTransactionsInResDto=new SaveFullTransactionsInResDto();
  listSaveTransactionsDetailInReqDto:SaveTransactionsDetailsInReqDto[]=[]
  getAllTransactionsOutResDto?:GetAllTransactionsOutResDto
  getAllTransactionsDetailsOutResDto:GetAllTransactionsDetailsOutResDto=new GetAllTransactionsDetailsOutResDto();
  transactionsOut:GetTransactionsOutDataDto[]=[]
  transactionsDetailOut:GetTransactionsDetailsOutDataDto[]=[]
  transactionsOutSelected!:GetTransactionsOutDataDto
  transactionsOutSubs?:Subscription;
  transactionsDetailOutSubs?:Subscription;
  listStatusesTransactions:StatusesTransactions[]=[]
  listStatusesTransactionsCode:string[]=[]
  statusesTransactionsCode!:string
  statusesTransactionsSubs?:Subscription;

  statusesTransactionsSelected:StatusesTransactions=new StatusesTransactions();

  getByReq:Assets[]=[]
  
  ngOnDestroy(): void {
    this.statusesTransactionsSubs?.unsubscribe()
    this.transactionsOutSubs?.unsubscribe()
    this.transactionsDetailOutSubs?.unsubscribe()

  }

  ngOnInit(): void {
    this.statusesTransactionsSubs=this.statusesTransactionsService.getAll().subscribe(result=>{
      this.listStatusesTransactions=result
      for (let i = 0; i < this.listStatusesTransactions.length; i++) {
        const statusesTransactionsCode = this.listStatusesTransactions[i].statusesTransactionsCode;
        this.listStatusesTransactionsCode.push(statusesTransactionsCode);
        
      }
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
        this.assetsService.getByAssetsName(this.transactionsDetailOut[i].assetsName).subscribe(result=>{
          if (result.data.statusesInOutCode==statusesInOutCode.get(2)) {
            this.saveTransactionDetailInReqDto=new SaveTransactionsDetailsInReqDto();
            this.saveTransactionDetailInReqDto.assetsName = result.data.assetsName;
            if (this.transactionsDetailOut[i].employeesCode) {
              this.saveTransactionDetailInReqDto.employeesCode=this.transactionsDetailOut[i].employeesCode;
            }
            if (this.transactionsDetailOut[i].locationsCode) {
              this.saveTransactionDetailInReqDto.locationsCode=this.transactionsDetailOut[i].locationsCode;
            }
            if (this.transactionsDetailOut[i].assetsGeneralName) {
              this.saveTransactionDetailInReqDto.assetsGeneralName=this.transactionsDetailOut[i].assetsGeneralName;
            }
            this.listSaveTransactionsDetailInReqDto.push(this.saveTransactionDetailInReqDto)
          }
        })
      }
    })
  }
  submitData(){
    console.log(this.listSaveTransactionsDetailInReqDto)
    this.saveTransactionsInReqDto.transactionsOutCode=this.transactionsOutSelected.transactionsOutCode
    this.saveFullTransactionsInReqDto.transactionsDetailDto=this.listSaveTransactionsDetailInReqDto;
    this.saveFullTransactionsInReqDto.saveTransactionsInReqDto=this.saveTransactionsInReqDto
    this.transactionsInService.insertAll(this.saveFullTransactionsInReqDto).subscribe(result=>{
      this.saveFullTransactionsInResDto=result;
      if (this.saveFullTransactionsInResDto) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Transaction in success',
        })
        setTimeout(
          () => 
          this.router.navigateByUrl("admin/transactions-in")
          ,2000,
        )
      }
    })
  }
  
  back(){
    this.router.navigateByUrl("admin/transactions-in")
  }
  delete(rowIndex:number){
    this.listSaveTransactionsDetailInReqDto=this.listSaveTransactionsDetailInReqDto.filter(result=>
      this.listSaveTransactionsDetailInReqDto[rowIndex].assetsName != result.assetsName)
  }

}
