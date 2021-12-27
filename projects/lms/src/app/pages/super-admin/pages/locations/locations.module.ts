import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsViewComponent } from './locations-view/locations-view.component';
import { LocationsModifyComponent } from './locations-modify/locations-modify.component';
import { TableModule } from 'primeng/table';
import { LocationsRoutingModule } from './locations-routing.module';



@NgModule({
  declarations: [
    LocationsViewComponent,
    LocationsModifyComponent
  ],
  imports: [
    CommonModule, LocationsRoutingModule, TableModule
  ]
})
export class LocationsModule { }
