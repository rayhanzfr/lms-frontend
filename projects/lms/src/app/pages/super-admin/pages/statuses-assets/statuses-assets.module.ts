import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusesAssetsViewComponent } from './statuses-assets-view/statuses-assets-view.component';
import { StatusesAssetsRoutingModule } from './statuses-assets-routing.module';
import { TableModule } from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [
    StatusesAssetsViewComponent
  ],
  imports: [
    CommonModule, StatusesAssetsRoutingModule, TableModule, CheckboxModule
  ]
})
export class StatusesAssetsModule { }
