import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesViewComponent } from './roles-view/roles-view.component';


const rolesRoutes:Routes=[
  {
    path:'',
    component:RolesViewComponent
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
