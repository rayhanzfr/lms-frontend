import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModifyComponent } from './users-modify/users-modify.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    UsersModifyComponent,
    UsersViewComponent
  ],
  imports: [
    CommonModule, UsersRoutingModule
  ]
})
export class UsersModule { }
