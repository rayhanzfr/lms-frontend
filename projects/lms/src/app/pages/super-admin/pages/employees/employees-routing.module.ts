import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesViewComponent } from './employees-view/employees-view.component';
import { EmployeesModifyComponent } from './employees-modify/employees-modify.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesViewComponent
  },
  {
    path: 'new',
    component: EmployeesModifyComponent
  },
  {
    path: ':code',
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
