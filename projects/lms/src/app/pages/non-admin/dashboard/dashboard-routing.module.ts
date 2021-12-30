import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'non-admin-dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }
