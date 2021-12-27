import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsModifyComponent } from './permissions-modify/permissions-modify.component';
import { PermissionsViewComponent } from './permissions-view/permissions-view.component';

const permissionsRoutes:Routes=[
  {
    path:'admin/permissions',
    component:PermissionsViewComponent
  },
  {
    path:'admin/permissions/new',
    component:PermissionsModifyComponent
  },
  {
    path:'admin/permissions/:id',
    component:PermissionsModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(permissionsRoutes)
  ]
})
export class PermissionsRoutingModule { }
