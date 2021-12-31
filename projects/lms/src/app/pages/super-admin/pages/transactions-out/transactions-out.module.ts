import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsOutRoutingModule } from './transactions-out-routing.module';
import { TransactionsOutViewComponent } from './transactions-out-view/transactions-out-view.component';
import { TransactionsOutModifyComponent } from './transactions-out-modify/transactions-out-modify.component';
import { TransactionsOutDetailViewComponent } from './transactions-out-detail-view/transactions-out-detail-view.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    TransactionsOutViewComponent,
    TransactionsOutModifyComponent,
    TransactionsOutDetailViewComponent
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
