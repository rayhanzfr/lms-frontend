import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsBrandsModifyComponent } from './items-brands-modify/items-brands-modify.component';
import { ItemsBrandsViewComponent } from './items-brands-view/items-brands-view.component';



@NgModule({
  declarations: [
    ItemsBrandsModifyComponent,
    ItemsBrandsViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemsBrandsModule { }
