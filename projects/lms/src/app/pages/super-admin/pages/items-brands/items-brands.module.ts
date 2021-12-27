import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsBrandsModifyComponent } from './items-brands-modify/items-brands-modify.component';
import { ItemsBrandsViewComponent } from './items-brands-view/items-brands-view.component';
import { MainbarModule } from '../../../mainbar/mainbar.module';
import { TableModule } from 'primeng/table';
import { ItemsBrandsRoutingModule } from './items-brands-routing.module';



@NgModule({
  declarations: [
    ItemsBrandsModifyComponent,
    ItemsBrandsViewComponent
  ],
  imports: [
    CommonModule,
    ItemsBrandsRoutingModule,
    MainbarModule, 
    TableModule
  ]
})
export class ItemsBrandsModule { }
