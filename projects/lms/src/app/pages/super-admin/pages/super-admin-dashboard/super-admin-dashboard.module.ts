import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminDashboardComponent } from './super-admin-dashboard.component';
import { MainbarComponent } from '../../../mainbar/mainbar.component';
import { SuperAdminDashboardRoutingModule } from './super-admin-dashboard-routing.module';



@NgModule({
  declarations: [
    SuperAdminDashboardComponent
  ],
  imports: [
    CommonModule, SuperAdminDashboardRoutingModule, MainbarComponent
  ]
})
export class SuperAdminDashboardModule { }
