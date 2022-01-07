import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesViewComponent } from './invoices-view/invoices-view.component';
import { InvoicesModifyComponent } from './invoices-modify/invoices-modify.component';

const routes: Routes = [
  {
    path: '',
    component:InvoicesViewComponent
  },
  {
    path: 'new',
    component:InvoicesModifyComponent
  },
  {
    path: ':code',
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
