import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminDashboardComponent } from './super-admin-dashboard.component';

const superDashboard: Routes = [
  {
    path: '',
    component: SuperAdminDashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(superDashboard)
  ]
})
export class SuperAdminDashboardRoutingModule { }
