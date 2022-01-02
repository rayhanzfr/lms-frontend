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
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';



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
