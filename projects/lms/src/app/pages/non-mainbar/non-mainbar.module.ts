import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonMainbarComponent } from './non-mainbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NonMainbarComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    NonMainbarComponent,
    RouterModule
  ]
})
export class NonMainbarModule { }
