import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainbarComponent } from './pages/mainbar/mainbar.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/super-admin-dashboard/super-admin-dashboard.module').then(result => result.SuperAdminDashboardModule)
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/statuses-assets/statuses-assets.module').then(result => result.StatusesAssetsModule)
  },
  {
    path:'',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/users/users.module').then(result=>result.UsersModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
