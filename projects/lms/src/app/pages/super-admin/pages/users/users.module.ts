import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersModifyComponent } from './users-modify/users-modify.component'
import { UsersViewComponent } from './users-view/users-view.component'
import { UsersRoutingModule } from './users-routing.module'
import { TableModule } from 'primeng/table'
import { MainbarModule } from '../../../mainbar/mainbar.module'
import { SliderModule } from 'primeng/slider'
import { ContextMenuModule } from 'primeng/contextmenu'
import { ToolbarModule } from 'primeng/toolbar'
import { InputTextModule } from 'primeng/inputtext'
import { MultiSelectModule } from 'primeng/multiselect'
import { ButtonModule } from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown'

@NgModule({
  declarations: [UsersModifyComponent, UsersViewComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MainbarModule,
    TableModule,
    ContextMenuModule,
    SliderModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule,
  ],
})
export class UsersModule {}
