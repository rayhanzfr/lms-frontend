import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsInViewComponent } from './transactions-in-view/transactions-in-view.component';
import { TransactionsInModifyComponent } from './transactions-in-modify/transactions-in-modify.component';



@NgModule({
  declarations: [
    TransactionsInViewComponent,
    TransactionsInModifyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionsInModule { }
