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
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/companies/companies.module').then(result => result.CompaniesModule)
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/locations/locations.module').then(result => result.LocationsModule)
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/invoices/invoices.module').then(result => result.InvoicesModule)
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/transactions-in/transactions-in.module').then(result => result.TransactionsInModule)
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/transactions-out/transactions-out.module').then(result => result.TransactionsOutModule)
  },
    {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/reports/reports.module').then(result => result.ReportsModule)
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/roles/roles.module').then(result => result.RolesModule)
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/items-brands/items-brands.module').then(result => result.ItemsBrandsModule)
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/items-types/items-types.module').then(result => result.ItemsTypesModule)
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/items/items.module').then(result => result.ItemsModule)
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/permissions/permissions.module').then(result => result.PermissionsModule)
  },
  {
    path: '',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/statuses-transactions/statuses-transactions.module').then(result => result.StatusesTransactionsModule)
  },
  {
    path:'',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/users/users.module').then(result=>result.UsersModule)
  },
  {
    path:'',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/assets/assets.module').then(result=>result.AssetsModule)
  },
  {
    path:'',
    component: MainbarComponent,
    loadChildren: () => import('./../app/pages/super-admin/pages/employees/employees.module').then(result=>result.EmployeesModule)
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
