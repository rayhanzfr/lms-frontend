import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsViewComponent } from './permissions-view/permissions-view.component';
import { PermissionsModifyComponent } from './permissions-modify/permissions-modify.component';
import { MainbarModule } from '../../../mainbar/mainbar.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PermissionsViewComponent,
    PermissionsModifyComponent
  ],
  imports: [
    CommonModule,
    PermissionsRoutingModule,
    MainbarModule, 
    TableModule,
    FormsModule
  ]
})
export class PermissionsModule { }
