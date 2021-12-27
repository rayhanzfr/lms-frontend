import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusesTransactionsModifyComponent } from './statuses-transactions-modify/statuses-transactions-modify.component';
import { StatusesTransactionsViewComponent } from './statuses-transactions-view/statuses-transactions-view.component';

const statusesTransactionsRoutes:Routes=[
  {
    path:'admin/statuses-transactions',
    component:StatusesTransactionsViewComponent
  },
  {
    path:'admin/statuses-transactions/new',
    component:StatusesTransactionsModifyComponent
  },
  {
    path:'admin/statuses-transactions/:id',
    component:StatusesTransactionsModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(statusesTransactionsRoutes)
  ]
})
export class StatusesTransactionsRoutingModule { }
