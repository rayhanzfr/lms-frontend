import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { roleCode } from 'projects/core/src/app/constant/rolecode';
import { GetAllTransactionsOutByUsersResDto } from 'projects/core/src/app/dto/transactions-out/get-all-transactions-out-by-users-res-dto';
import { AuthService } from 'projects/core/src/app/services/auth/auth.service';
import { TransactionsOutService } from 'projects/core/src/app/services/transactions-out/transactions-out.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-out-view',
  templateUrl: './transactions-out-view.component.html',
  styleUrls: ['./transactions-out-view.component.css']
})
export class NonTransactionsOutViewComponent implements OnInit,OnDestroy{

  constructor(private router:Router,private transactionsOutService:TransactionsOutService) { }
  data:GetAllTransactionsOutByUsersResDto=new GetAllTransactionsOutByUsersResDto();
  obs?:Subscription

  ngOnDestroy():void{
    this.obs?.unsubscribe();
  }
  ngOnInit(): void {     
    this.obs=this.transactionsOutService.getAllByUsers().subscribe(result=>{
      this.data=result
      console.log(this.data)
    })
  }
  gotoInsert(){
    this.router.navigateByUrl('non-admin/transactions-out/new')
  }

  goToDetail(code:string):void{
    this.router.navigateByUrl(`non-admin/transactions-out/detail/${code}`)
  }

}
