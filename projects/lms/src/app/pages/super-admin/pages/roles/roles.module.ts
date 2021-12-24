import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesViewComponent } from './roles-view/roles-view.component';
import { RolesModifyComponent } from './roles-modify/roles-modify.component';



@NgModule({
  declarations: [
    RolesViewComponent,
    RolesModifyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RolesModule { }
