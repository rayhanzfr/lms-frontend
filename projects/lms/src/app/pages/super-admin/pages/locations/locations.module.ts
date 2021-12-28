import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsViewComponent } from './locations-view/locations-view.component';
import { LocationsModifyComponent } from './locations-modify/locations-modify.component';
import { TableModule } from 'primeng/table';
import { LocationsRoutingModule } from './locations-routing.module';
import { ContextMenuModule } from 'primeng/contextmenu';
import { SliderModule } from 'primeng/slider';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LocationsViewComponent,
    LocationsModifyComponent
  ],
  imports: [
    CommonModule, LocationsRoutingModule, TableModule,
    ContextMenuModule,
    SliderModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule
  ]
})
export class LocationsModule { }
