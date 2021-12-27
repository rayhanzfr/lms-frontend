import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusesAssetsViewComponent } from './statuses-assets-view/statuses-assets-view.component';
import { StatusesAssetsModifyComponent } from './statuses-assets-modify/statuses-assets-modify.component';
import { StatusesAssetsRoutingModule } from './statuses-assets-routing.module';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    StatusesAssetsViewComponent,
    StatusesAssetsModifyComponent
  ],
  imports: [
    CommonModule, StatusesAssetsRoutingModule, TableModule
  ]
})
export class StatusesAssetsModule { }
