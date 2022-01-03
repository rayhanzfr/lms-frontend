import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles.component';
import { ProfilesModifyComponent } from './profiles-modify/profiles-modify.component';

const routes: Routes = [
  {
    path:'profiles',
    component: ProfilesComponent
  },
  {
    path:'profiles/:code',
    component: ProfilesModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ProfilesRoutingModule { }
