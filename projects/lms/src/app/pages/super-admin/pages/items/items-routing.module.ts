import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsViewComponent } from './items-view/items-view.component';
import { ItemsModifyComponent } from './items-modify/items-modify.component';
import { RouterModule, Routes } from '@angular/router';


const itemsRoutes:Routes=[
  {
    path:'admin/items',
    component:ItemsViewComponent
  },
  {
    path:'admin/items/new',
    component:ItemsModifyComponent
  },
  {
    path:'admin/items/:id',
    component:ItemsModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(itemsRoutes)
  ]
})
export class ItemsRoutingModule { }
