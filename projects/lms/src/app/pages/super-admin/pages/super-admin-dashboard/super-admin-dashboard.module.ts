import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminDashboardComponent } from './super-admin-dashboard.component';
import { SuperAdminDashboardRoutingModule } from './super-admin-dashboard-routing.module';
import { MainbarModule } from '../../../mainbar/mainbar.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    SuperAdminDashboardComponent
  ],
  imports: [
    CommonModule, SuperAdminDashboardRoutingModule, MainbarModule, TableModule, ButtonModule
  ]
})
export class SuperAdminDashboardModule { }
