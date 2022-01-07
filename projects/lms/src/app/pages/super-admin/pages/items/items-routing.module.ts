import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsViewComponent } from './items-view/items-view.component';
import { ItemsModifyComponent } from './items-modify/items-modify.component';
import { RouterModule, Routes } from '@angular/router';


const itemsRoutes:Routes=[
  {
    path:'',
    component:ItemsViewComponent
  },
  {
    path:'new',
    component:ItemsModifyComponent
  },
  {
    path:':code',
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
