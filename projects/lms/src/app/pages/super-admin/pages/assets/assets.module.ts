import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsViewComponent } from './assets-view/assets-view.component';
import { AssetsModifyComponent } from './assets-modify/assets-modify.component';
import { AssetsRoutingModule } from './assets-routing.module';
import { MainbarModule } from '../../../mainbar/mainbar.module';



@NgModule({
  declarations: [
    AssetsViewComponent,
    AssetsModifyComponent
  ],
  imports: [
    CommonModule, AssetsRoutingModule, MainbarModule
  ]
})
export class AssetsModule { }
