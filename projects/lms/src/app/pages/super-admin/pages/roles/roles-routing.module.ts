import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesViewComponent } from './roles-view/roles-view.component';
import { RolesModifyComponent } from './roles-modify/roles-modify.component';


const rolesRoutes:Routes=[
  {
    path:'',
    component:RolesViewComponent
  },
  {
    path:'new',
    component:RolesModifyComponent
  },
  {
    path:':id',
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
