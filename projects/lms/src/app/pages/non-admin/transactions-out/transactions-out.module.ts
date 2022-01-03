import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonTransactionsOutViewComponent } from './transactions-out-view/transactions-out-view.component';
import { NonTransactionsOutDetailViewComponent } from './transactions-out-detail-view/transactions-out-detail-view.component';
import { NonTransactionsOutModifyComponent } from './transactions-out-modify/transactions-out-modify.component';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TransactionsOutRoutingModule } from './transactions-out-routing.module';



@NgModule({
  declarations: [
    NonTransactionsOutViewComponent,
    NonTransactionsOutDetailViewComponent,
    NonTransactionsOutModifyComponent
  ],
  imports: [
    CommonModule,
    TransactionsOutRoutingModule,
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
export class TransactionsOutModule { }
