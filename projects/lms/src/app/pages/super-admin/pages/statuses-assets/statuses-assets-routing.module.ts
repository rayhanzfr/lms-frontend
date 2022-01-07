import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StatusesAssetsViewComponent } from './statuses-assets-view/statuses-assets-view.component';

const routes: Routes = [
  {
    path: '',
    component:StatusesAssetsViewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class StatusesAssetsRoutingModule { }
