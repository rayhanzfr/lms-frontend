import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesViewComponent } from './roles-view/roles-view.component';
import { RolesModifyComponent } from './roles-modify/roles-modify.component';


const rolesRoutes:Routes=[
  {
    path:'admin/roles',
    component:RolesViewComponent
  },
  {
    path:'admin/roles/new',
    component:RolesModifyComponent
  },
  {
    path:'admin/roles/:id',
    component:RolesModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rolesRoutes)
  ]
})
export class RolesRoutingModule { }
