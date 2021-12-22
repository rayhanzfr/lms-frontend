import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsViewComponent } from './assets-view/assets-view.component';
import { AssetsModifyComponent } from './assets-modify/assets-modify.component';



@NgModule({
  declarations: [
    AssetsViewComponent,
    AssetsModifyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AssetsModule { }
