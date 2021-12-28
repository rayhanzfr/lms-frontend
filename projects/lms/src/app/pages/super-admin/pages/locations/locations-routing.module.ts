import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LocationsViewComponent } from './locations-view/locations-view.component';

const routes: Routes = [
  {
    path: 'admin/locations',
    component:LocationsViewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class LocationsRoutingModule { }
