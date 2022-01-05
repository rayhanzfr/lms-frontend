import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsViewComponent } from './assets-view/assets-view.component';
import { AssetsModifyComponent } from './assets-modify/assets-modify.component';
import { AssetsRoutingModule } from './assets-routing.module';
import { MainbarModule } from '../../../mainbar/mainbar.module';

import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import {FileUploadModule} from 'primeng/fileupload';
import {CalendarModule} from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';



@NgModule({
  declarations: [
    AssetsViewComponent,
    AssetsModifyComponent
  ],
  imports: [
    CommonModule, AssetsRoutingModule, MainbarModule,

    ToolbarModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    FormsModule,
    FileUploadModule,
    CalendarModule,
    DropdownModule,
    ToastModule,
    MessagesModule,
        MessageModule,
  ]
})
export class AssetsModule { }
