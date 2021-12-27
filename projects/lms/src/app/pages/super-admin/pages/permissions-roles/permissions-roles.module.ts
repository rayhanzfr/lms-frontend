import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsRolesRoutingModule } from './permissions-roles-routing.module';
import { PermissionsRolesViewComponent } from './permissions-roles-view/permissions-roles-view.component';
import { PermissionsRolesModifyComponent } from './permissions-roles-modify/permissions-roles-modify.component';


@NgModule({
  declarations: [
    PermissionsRolesViewComponent,
    PermissionsRolesModifyComponent],
  imports: [
    CommonModule,
    PermissionsRolesRoutingModule
  ]
})
export class PermissionsRolesModule { }
