import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesViewComponent } from './employees-view/employees-view.component';
import { EmployeesModifyComponent } from './employees-modify/employees-modify.component';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesViewComponent,
    EmployeesModifyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
