import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesViewComponent } from './invoices-view/invoices-view.component';
import { InvoicesModifyComponent } from './invoices-modify/invoices-modify.component';
import { TableModule } from 'primeng/table';
import { InvoicesRoutingModule } from './invoices-routing.module';



@NgModule({
  declarations: [
    InvoicesViewComponent,
    InvoicesModifyComponent
  ],
  imports: [
    CommonModule, InvoicesRoutingModule, TableModule
  ]
})
export class InvoicesModule { }
