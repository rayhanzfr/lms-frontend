import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersModifyComponent } from './users-modify/users-modify.component'
import { UsersViewComponent } from './users-view/users-view.component'
import { UsersRoutingModule } from './users-routing.module'
import { TableModule } from 'primeng/table'
import { MainbarModule } from '../../../mainbar/mainbar.module'
import { SliderModule } from 'primeng/slider'
import { ToolbarModule } from 'primeng/toolbar'
import { InputTextModule } from 'primeng/inputtext'
import { MultiSelectModule } from 'primeng/multiselect'
import { ButtonModule } from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown'
import { FormsModule } from '@angular/forms'
import { ToastModule } from 'primeng/toast'
import { ConfirmDialogModule } from 'primeng/confirmdialog'

@NgModule({
  declarations: [UsersModifyComponent, UsersViewComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MainbarModule,
    TableModule,
    SliderModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule,
    ToastModule,
    ConfirmDialogModule
  ],
})
export class UsersModule {}
