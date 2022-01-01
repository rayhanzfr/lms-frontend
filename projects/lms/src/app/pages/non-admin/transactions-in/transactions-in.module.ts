import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsViewComponent } from './transactions-view/transactions-view.component';
import { TransactionsInViewComponent } from './transactions-in-view/transactions-in-view.component';
import { TransactionsInModifyComponent } from './transactions-in-modify/transactions-in-modify.component';
import { TransactionsInDetailViewComponent } from './transactions-in-detail-view/transactions-in-detail-view.component';



@NgModule({
  declarations: [
    TransactionsViewComponent,
    TransactionsInViewComponent,
    TransactionsInModifyComponent,
    TransactionsInDetailViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionsInModule { }
