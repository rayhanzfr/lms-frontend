import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainbarModule } from '../../mainbar/mainbar.module';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,DashboardRoutingModule, MainbarModule,TableModule
  ]
})
export class DashboardModule { }
