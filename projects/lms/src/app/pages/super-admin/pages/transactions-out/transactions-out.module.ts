import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsOutRoutingModule } from './transactions-out-routing.module';
import { TransactionsOutViewComponent } from './transactions-out-view/transactions-out-view.component';
import { TransactionsOutModifyComponent } from './transactions-out-modify/transactions-out-modify.component';


@NgModule({
  declarations: [
    TransactionsOutViewComponent,
    TransactionsOutModifyComponent
  ],
  imports: [
    CommonModule,
    TransactionsOutRoutingModule
  ]
})
export class TransactionsOutModule { }
