import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsOutDetailViewComponent } from './transactions-out-detail-view/transactions-out-detail-view.component';
import { TransactionsOutModifyComponent } from './transactions-out-modify/transactions-out-modify.component';
import { TransactionsOutViewComponent } from './transactions-out-view/transactions-out-view.component';

const routes: Routes = [
  {
    path: 'admin/transactions-out',
    component:TransactionsOutViewComponent
  },
  {
    path: 'admin/transactions-out/detail/:code',
    component:TransactionsOutDetailViewComponent
  },
  {
    path: 'admin/transactions-out/new',
    component:TransactionsOutModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TransactionsOutRoutingModule { }
