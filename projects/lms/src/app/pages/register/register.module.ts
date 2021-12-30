import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterViewComponent } from './register-view/register-view.component';
import { RegisterModifyComponent } from './register-modify/register-modify.component';



@NgModule({
  declarations: [
    RegisterViewComponent,
    RegisterModifyComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    RegisterRoutingModule,
    FormsModule
  ]
})
export class RegisterModule { }
