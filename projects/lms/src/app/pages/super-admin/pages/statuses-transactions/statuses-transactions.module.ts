import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusesTransactionsRoutingModule } from './statuses-transactions-routing.module';
import { StatusesTransactionsViewComponent } from './statuses-transactions-view/statuses-transactions-view.component';
import { StatusesTransactionsModifyComponent } from './statuses-transactions-modify/statuses-transactions-modify.component';
import { MainbarModule } from '../../../mainbar/mainbar.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StatusesTransactionsViewComponent,
    StatusesTransactionsModifyComponent
  ],
  imports: [
    CommonModule,
    StatusesTransactionsRoutingModule,
    MainbarModule, 
    TableModule,
    FormsModule
  ]
})
export class StatusesTransactionsModule { }
