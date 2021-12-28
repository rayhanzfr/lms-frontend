import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesViewComponent } from './roles-view/roles-view.component';
import { RolesModifyComponent } from './roles-modify/roles-modify.component';
import { RolesRoutingModule } from './roles-routing.module';
import { MainbarModule } from '../../../mainbar/mainbar.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { ContextMenuModule } from 'primeng/contextmenu';
import { SliderModule } from 'primeng/slider';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    RolesViewComponent,
    RolesModifyComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MainbarModule, 
    TableModule,
    FormsModule,
    ContextMenuModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule
  ]
})
export class RolesModule { }
