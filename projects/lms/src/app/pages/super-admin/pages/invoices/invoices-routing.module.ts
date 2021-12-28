import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesViewComponent } from './invoices-view/invoices-view.component';
import { InvoicesModifyComponent } from './invoices-modify/invoices-modify.component';

const routes: Routes = [
  {
    path: 'admin/invoices',
    component:InvoicesViewComponent
  },
  {
    path: 'admin/invoices/new',
    component:InvoicesModifyComponent
  },
  {
    path: 'admin/invoices/:code',
    component:InvoicesModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class InvoicesRoutingModule { }
