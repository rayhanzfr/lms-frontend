import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonTransactionsOutViewComponent } from './transactions-out-view/transactions-out-view.component';
import { NonTransactionsOutDetailViewComponent } from './transactions-out-detail-view/transactions-out-detail-view.component';
import { NonTransactionsOutModifyComponent } from './transactions-out-modify/transactions-out-modify.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'non-admin/transactions-out',
    component:NonTransactionsOutViewComponent
  },
  {
    path: 'non-admin/transactions-out/detail/:code',
    component:NonTransactionsOutDetailViewComponent
  },
  {
    path: 'non-admin/transactions-out/new',
    component:NonTransactionsOutModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TransactionsOutRoutingModule { }
