import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesViewComponent } from './invoices-view/invoices-view.component';
import { InvoicesModifyComponent } from './invoices-modify/invoices-modify.component';



@NgModule({
  declarations: [
    InvoicesViewComponent,
    InvoicesModifyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoicesModule { }
