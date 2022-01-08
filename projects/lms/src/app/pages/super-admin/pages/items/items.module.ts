import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsViewComponent } from './items-view/items-view.component';
import { ItemsModifyComponent } from './items-modify/items-modify.component';
import { TableModule } from 'primeng/table';
import { MainbarModule } from '../../../mainbar/mainbar.module';
import { ItemsRoutingModule } from './items-routing.module';
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
    ItemsViewComponent,
    ItemsModifyComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
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
export class ItemsModule { }
