import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LocationsViewComponent } from './locations-view/locations-view.component';
import { LocationsModifyComponent } from './locations-modify/locations-modify.component';

const routes: Routes = [
  {
    path: 'admin/locations',
    component:LocationsViewComponent
  },
  {
    path: 'admin/locations/new',
    component:LocationsModifyComponent
  },
  {
    path:'admin/locations/:code',
    component:LocationsModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class LocationsRoutingModule { }
