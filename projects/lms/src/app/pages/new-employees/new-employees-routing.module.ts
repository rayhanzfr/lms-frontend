import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewEmployeesComponent } from './new-employees.component';

const routes: Routes = [
  {
    path: '',
    component:NewEmployeesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class NewEmployeesRoutingModule { }
