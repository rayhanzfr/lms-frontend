import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsBrandsModifyComponent } from './items-brands-modify/items-brands-modify.component';
import { ItemsBrandsViewComponent } from './items-brands-view/items-brands-view.component';
import { MainbarModule } from '../../../mainbar/mainbar.module';
import { TableModule } from 'primeng/table';
import { ItemsBrandsRoutingModule } from './items-brands-routing.module';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    ItemsBrandsModifyComponent,
    ItemsBrandsViewComponent
  ],
  imports: [
    CommonModule,
    ItemsBrandsRoutingModule,
    MainbarModule, 
    TableModule,
    FormsModule,
    ContextMenuModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class ItemsBrandsModule { }
