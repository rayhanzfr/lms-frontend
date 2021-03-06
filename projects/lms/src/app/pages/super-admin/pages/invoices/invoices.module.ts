import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesViewComponent } from './invoices-view/invoices-view.component';
import { InvoicesModifyComponent } from './invoices-modify/invoices-modify.component';
import { TableModule } from 'primeng/table';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    InvoicesViewComponent,
    InvoicesModifyComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class InvoicesModule { }
