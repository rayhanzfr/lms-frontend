import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsOutViewComponent } from './transactions-out-view/transactions-out-view.component';
import { TransactionsOutDetailViewComponent } from './transactions-out-detail-view/transactions-out-detail-view.component';
import { TransactionsOutModifyComponent } from './transactions-out-modify/transactions-out-modify.component';



@NgModule({
  declarations: [
    TransactionsOutViewComponent,
    TransactionsOutDetailViewComponent,
    TransactionsOutModifyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionsOutModule { }
