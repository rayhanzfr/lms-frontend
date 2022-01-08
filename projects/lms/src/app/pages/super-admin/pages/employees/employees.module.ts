import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesViewComponent } from './employees-view/employees-view.component';
import { EmployeesModifyComponent } from './employees-modify/employees-modify.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { MainbarModule } from '../../../mainbar/mainbar.module';
import { ButtonModule } from 'primeng/button'
import {DropdownModule} from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar'
import { InputTextModule } from 'primeng/inputtext'
import { TableModule } from 'primeng/table'
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    EmployeesViewComponent,
    EmployeesModifyComponent
  ],
  imports: [
    CommonModule, EmployeesRoutingModule, MainbarModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    ToolbarModule,
    InputTextModule,
    FormsModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class EmployeesModule { }
