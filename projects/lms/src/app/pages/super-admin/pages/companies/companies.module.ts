import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesViewComponent } from './companies-view/companies-view.component';
import { CompaniesModifyComponent } from './companies-modify/companies-modify.component';
import { TableModule } from 'primeng/table';
import { CompaniesRoutingModule } from './companies-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CompaniesViewComponent,
    CompaniesModifyComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ]
})
export class CompaniesModule { }
