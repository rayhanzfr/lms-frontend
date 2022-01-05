import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmployeesComponent } from './new-employees.component';
import { NewEmployeesRoutingModule } from './new-employees-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewEmployeesComponent
  ],
  imports: [
    CommonModule, NewEmployeesRoutingModule, DropdownModule, ButtonModule, FormsModule
  ]
})
export class NewEmployeesModule { }
