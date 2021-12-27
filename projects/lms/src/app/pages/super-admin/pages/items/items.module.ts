import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsViewComponent } from './items-view/items-view.component';
import { ItemsModifyComponent } from './items-modify/items-modify.component';
import { TableModule } from 'primeng/table';
import { MainbarModule } from '../../../mainbar/mainbar.module';
import { ItemsRoutingModule } from './items-routing.module';



@NgModule({
  declarations: [
    ItemsViewComponent,
    ItemsModifyComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MainbarModule, 
    TableModule
  ]
})
export class ItemsModule { }
