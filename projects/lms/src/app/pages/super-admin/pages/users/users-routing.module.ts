import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersViewComponent } from './users-view/users-view.component';
import { Users } from 'projects/core/src/app/dto/users/users';
import { UsersModifyComponent } from './users-modify/users-modify.component';

const routes: Routes = [
  {
    path: '',
    component:UsersViewComponent
  },
  {
    path: 'new',
    component:UsersModifyComponent
  },
  {
    path: ':code',
    component:UsersModifyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
