import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesViewComponent } from './companies-view/companies-view.component';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesModifyComponent } from './companies-modify/companies-modify.component';

const routes: Routes = [
  {
    path: 'admin/companies',
    component: CompaniesViewComponent
  },
  {
    path: 'admin/companies/new',
    component: CompaniesModifyComponent
  },
  {
    path: 'admin/companies/:code',
    component: CompaniesModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CompaniesRoutingModule { }
