import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { MainbarModule } from '../mainbar/mainbar.module';
import { ButtonModule } from 'primeng/button';
import { ProfilesModifyComponent } from './profiles-modify/profiles-modify.component';



@NgModule({
  declarations: [
    ProfilesComponent,
    ProfilesModifyComponent
  ],
  imports: [
    CommonModule, ProfilesRoutingModule,MainbarModule, ButtonModule
  ]
})
export class ProfilesModule { }
