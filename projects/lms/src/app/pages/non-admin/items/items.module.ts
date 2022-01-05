import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsViewComponent } from './items-view/items-view.component';
import { ItemsModifyComponent } from './items-modify/items-modify.component';



@NgModule({
  declarations: [
    ItemsViewComponent,
    ItemsModifyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemsModule { }
