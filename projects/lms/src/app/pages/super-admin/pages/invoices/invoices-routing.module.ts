import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesViewComponent } from './invoices-view/invoices-view.component';

const routes: Routes = [
  {
    path: 'admin/invoices',
    component:InvoicesViewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class InvoicesRoutingModule { }
