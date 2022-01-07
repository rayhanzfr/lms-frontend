import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsTypesViewComponent } from './items-types-view/items-types-view.component';
import { ItemsTypesModifyComponent } from './items-types-modify/items-types-modify.component';

const itemsTypesRoutes:Routes=[
  {
    path:'',
    component:ItemsTypesViewComponent
  },
  {
    path:'new',
    component:ItemsTypesModifyComponent
  },
  {
    path:':id',
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
