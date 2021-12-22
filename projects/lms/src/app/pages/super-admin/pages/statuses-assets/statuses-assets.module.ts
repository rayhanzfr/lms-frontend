import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusesAssetsViewComponent } from './statuses-assets-view/statuses-assets-view.component';
import { StatusesAssetsModifyComponent } from './statuses-assets-modify/statuses-assets-modify.component';



@NgModule({
  declarations: [
    StatusesAssetsViewComponent,
    StatusesAssetsModifyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatusesAssetsModule { }
