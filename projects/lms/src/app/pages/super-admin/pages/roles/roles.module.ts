import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesViewComponent } from './roles-view/roles-view.component';
import { RolesModifyComponent } from './roles-modify/roles-modify.component';
import { RolesRoutingModule } from './roles-routing.module';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    RolesViewComponent,
    RolesModifyComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TableModule
  ]
})
export class RolesModule { }
