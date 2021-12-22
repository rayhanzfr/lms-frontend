import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesViewComponent } from './companies-view/companies-view.component';
import { CompaniesModifyComponent } from './companies-modify/companies-modify.component';



@NgModule({
  declarations: [
    CompaniesViewComponent,
    CompaniesModifyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompaniesModule { }
