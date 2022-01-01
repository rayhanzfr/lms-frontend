import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AssetsViewComponent } from './assets-view/assets-view.component';
import { AssetsModifyComponent } from './assets-modify/assets-modify.component';

const routes:Routes=[
  {
    path:'admin/assets',
    component: AssetsViewComponent
  },
  {
    path:'admin/assets/new',
    component: AssetsModifyComponent
  },
  {
    path:'admin/assets/:code',
    component: AssetsModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AssetsRoutingModule { }
