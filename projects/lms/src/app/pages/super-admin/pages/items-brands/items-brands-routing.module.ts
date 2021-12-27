import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsBrandsViewComponent } from './items-brands-view/items-brands-view.component';
import { ItemsBrandsModifyComponent } from './items-brands-modify/items-brands-modify.component';

const itemsBrandsRoutes:Routes=[
  {
    path:'admin/items-brands',
    component:ItemsBrandsViewComponent
  },
  {
    path:'admin/items-brands/new',
    component:ItemsBrandsModifyComponent
  },
  {
    path:'admin/items-brands/:id',
    component:ItemsBrandsModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(itemsBrandsRoutes)
  ]
})
export class ItemsBrandsRoutingModule { }
