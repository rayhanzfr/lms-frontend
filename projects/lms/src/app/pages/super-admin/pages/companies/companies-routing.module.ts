import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesViewComponent } from './companies-view/companies-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin/companies',
    component: CompaniesViewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CompaniesRoutingModule { }
