import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { PasswordModule } from "primeng/password";
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    RouterModule,
    PasswordModule, 
    FormsModule,
    ToastModule
  ]
})
export class LoginModule { }
