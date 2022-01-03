import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllTransactionsInByUsersResDto } from 'projects/core/src/app/dto/transactions-in/get-all-transactions-in-by-users-res-dto';
import { TransactionsInService } from 'projects/core/src/app/services/transactions-in/transactions-in.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-in-view',
  templateUrl: './transactions-in-view.component.html',
  styleUrls: ['./transactions-in-view.component.css']
})
export class NonTransactionsInViewComponent implements OnInit {

  constructor(private router:Router,private transactionsInService:TransactionsInService) { }
  data:GetAllTransactionsInByUsersResDto=new GetAllTransactionsInByUsersResDto();
  obs?:Subscription

  ngOnDestroy():void{
    this.obs?.unsubscribe();
  }
  ngOnInit(): void {
    this.obs=this.transactionsInService.getAllByUsers().subscribe(result=>{
      this.data=result
    })
  }
  goToInsert(){
    this.router.navigateByUrl('non-admin/transactions-in/new')
  }

  goToDetail(code:string):void{
    this.router.navigateByUrl(`non-admin/transactions-in/detail/${code}`)
  }

}
