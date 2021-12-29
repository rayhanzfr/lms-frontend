import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsInViewComponent } from './transactions-in-view/transactions-in-view.component';
import { TransactionsInModifyComponent } from './transactions-in-modify/transactions-in-modify.component';
import { TransactionsInRoutingModule } from './transactions-in-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TransactionsInDetailViewComponent } from './transactions-in-detail-view/transactions-in-detail-view.component';



@NgModule({
  declarations: [
    TransactionsInViewComponent,
    TransactionsInModifyComponent,
    TransactionsInDetailViewComponent
  ],
  imports: [
    CommonModule,
    TransactionsInRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ]
})
export class TransactionsInModule { }
