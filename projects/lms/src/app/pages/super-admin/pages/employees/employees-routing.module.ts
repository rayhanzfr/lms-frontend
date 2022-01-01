import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesViewComponent } from './employees-view/employees-view.component';
import { EmployeesModifyComponent } from './employees-modify/employees-modify.component';

const routes: Routes = [
  {
    path: 'admin/employees',
    component: EmployeesViewComponent
  },
  {
    path: 'admin/employees/new',
    component: EmployeesModifyComponent
  },
  {
    path: 'admin/employees/:code',
    component: EmployeesModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class EmployeesRoutingModule { }
