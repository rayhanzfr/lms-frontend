import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NonTransactionsInViewComponent } from './transactions-in-view/transactions-in-view.component';
import { NonTransactionsInDetailViewComponent } from './transactions-in-detail-view/transactions-in-detail-view.component';
import { NonTransactionsInModifyComponent } from './transactions-in-modify/transactions-in-modify.component';


const routes: Routes = [
  {
    path: 'non-admin/transactions-in',
    component:NonTransactionsInViewComponent
  },
  {
    path: 'non-admin/transactions-in/detail/:code',
    component:NonTransactionsInDetailViewComponent
  },
  {
    path: 'non-admin/transactions-in/new',
    component:NonTransactionsInModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TransactionsInRoutingModule { }
