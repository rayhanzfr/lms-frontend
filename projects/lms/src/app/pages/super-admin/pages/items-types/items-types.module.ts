import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsTypesModifyComponent } from './items-types-modify/items-types-modify.component';
import { ItemsTypesViewComponent } from './items-types-view/items-types-view.component';
import { MainbarModule } from '../../../mainbar/mainbar.module';
import { TableModule } from 'primeng/table';
import { ItemsTypesRoutingModule } from './items-types-routing.module';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    ItemsTypesModifyComponent,
    ItemsTypesViewComponent
  ],
  imports: [
    CommonModule,
    ItemsTypesRoutingModule,
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
export class ItemsTypesModule { }
