import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersViewComponent } from './users-view/users-view.component';

const routes: Routes = [
  {
    path: 'admin/user',
    component:UsersViewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
