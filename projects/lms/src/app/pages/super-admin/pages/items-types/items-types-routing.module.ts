import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsTypesViewComponent } from './items-types-view/items-types-view.component';
import { ItemsTypesModifyComponent } from './items-types-modify/items-types-modify.component';

const itemsTypesRoutes:Routes=[
  {
    path:'admin/items-types',
    component:ItemsTypesViewComponent
  },
  {
    path:'admin/items-types/new',
    component:ItemsTypesModifyComponent
  },
  {
    path:'admin/items-types/:id',
    component:ItemsTypesModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(itemsTypesRoutes)
  ]
})
export class ItemsTypesRoutingModule { }
