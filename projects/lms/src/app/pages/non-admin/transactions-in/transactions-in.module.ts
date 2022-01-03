import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonTransactionsInViewComponent } from './transactions-in-view/transactions-in-view.component';
import { NonTransactionsInModifyComponent } from './transactions-in-modify/transactions-in-modify.component';
import { NonTransactionsInDetailViewComponent } from './transactions-in-detail-view/transactions-in-detail-view.component';
import { TransactionsInRoutingModule } from './transactions-in-routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    NonTransactionsInViewComponent,
    NonTransactionsInModifyComponent,
    NonTransactionsInDetailViewComponent
  ],
  imports: [
    CommonModule,
    TransactionsInRoutingModule,
    TableModule,
    FormsModule,
    ContextMenuModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule
  ]
})
export class TransactionsInModule { }
