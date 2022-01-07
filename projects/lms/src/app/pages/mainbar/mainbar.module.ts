import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainbarComponent } from './mainbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainbarComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    MainbarComponent,
    RouterModule
  ]
})
export class MainbarModule { }
