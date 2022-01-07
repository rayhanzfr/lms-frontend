import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsInViewComponent } from './transactions-in-view/transactions-in-view.component';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsInModifyComponent } from './transactions-in-modify/transactions-in-modify.component';
import { TransactionsInDetailViewComponent } from './transactions-in-detail-view/transactions-in-detail-view.component';

const routes: Routes = [
  {
    path: '',
    component:TransactionsInViewComponent
  },
  {
    path: 'detail/:code',
    component:TransactionsInDetailViewComponent
  },
  {
    path: 'new',
    component:TransactionsInModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TransactionsInRoutingModule { }
