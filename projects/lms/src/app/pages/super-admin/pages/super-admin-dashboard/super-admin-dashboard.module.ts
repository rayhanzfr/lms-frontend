import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminDashboardComponent } from './super-admin-dashboard.component';
import { SuperAdminDashboardRoutingModule } from './super-admin-dashboard-routing.module';
import { MainbarModule } from '../../../mainbar/mainbar.module';



@NgModule({
  declarations: [
    SuperAdminDashboardComponent
  ],
  imports: [
    CommonModule, SuperAdminDashboardRoutingModule, MainbarModule
  ]
})
export class SuperAdminDashboardModule { }
