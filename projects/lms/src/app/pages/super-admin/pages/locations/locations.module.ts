import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsViewComponent } from './locations-view/locations-view.component';
import { LocationsModifyComponent } from './locations-modify/locations-modify.component';



@NgModule({
  declarations: [
    LocationsViewComponent,
    LocationsModifyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LocationsModule { }
