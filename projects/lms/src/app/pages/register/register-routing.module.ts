import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterViewComponent } from './register-view/register-view.component';
import { RegisterModifyComponent } from './register-modify/register-modify.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterModifyComponent
  },
  {
    path: 'sent',
    component:RegisterViewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RegisterRoutingModule { }
