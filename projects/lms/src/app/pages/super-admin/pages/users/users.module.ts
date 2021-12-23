import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersModifyComponent } from './users-modify/users-modify.component';
import { UsersViewComponent } from './users-view/users-view.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersModifyComponent,
    UsersViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
