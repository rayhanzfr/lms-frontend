import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainbarComponent } from './pages/mainbar/mainbar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterModifyComponent } from './pages/register/register-modify/register-modify.component';
import { AuthGuard } from '../../../core/src/app/services/auth.guard';

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
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(result => result.RegisterModule)
  },
  {
    path: 'new-employee',
    loadChildren: () => import('./pages/new-employees/new-employees.module').then(result => result.NewEmployeesModule)
  },
  {
    path: 'admin-dashboard',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/super-admin-dashboard/super-admin-dashboard.module').then(result => result.SuperAdminDashboardModule)
  },
  {
    path: 'admin/statuses-assets',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/statuses-assets/statuses-assets.module').then(result => result.StatusesAssetsModule)
  },
  {
    path: 'admin/companies',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/companies/companies.module').then(result => result.CompaniesModule)
  },
  {
    path: 'admin/locations',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/locations/locations.module').then(result => result.LocationsModule)
  },
  {
    path: 'admin/invoices',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/invoices/invoices.module').then(result => result.InvoicesModule)
  },
  {
    path: 'admin/transactions-in',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/transactions-in/transactions-in.module').then(result => result.TransactionsInModule)
  },
  {
    path: 'admin/transactions-out',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/transactions-out/transactions-out.module').then(result => result.TransactionsOutModule)

  },
    {
    path: 'admin/reports',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/reports/reports.module').then(result => result.ReportsModule)
  },
  {
    path: 'admin/roles',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/roles/roles.module').then(result => result.RolesModule)
  },
  {
    path: 'admin/items-brands',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/items-brands/items-brands.module').then(result => result.ItemsBrandsModule)
  },
  {
    path: 'admin/items-types',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/items-types/items-types.module').then(result => result.ItemsTypesModule)
  },
  {
    path: 'admin/items',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/items/items.module').then(result => result.ItemsModule)
  },
  {
    path: '',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/permissions/permissions.module').then(result => result.PermissionsModule)
  },
  {
    path: 'admin/statuses-transactions',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/statuses-transactions/statuses-transactions.module').then(result => result.StatusesTransactionsModule)
  },
  {
    path:'admin/user',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/users/users.module').then(result=>result.UsersModule)
  },
  {
    path:'admin/assets',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/assets/assets.module').then(result=>result.AssetsModule)
  },
  {
    path:'admin/employees',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/employees/employees.module').then(result=>result.EmployeesModule)
  }

  //non admin
  ,{
    path:'',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/non-admin/dashboard/dashboard.module').then(result => result.DashboardModule)
  },
  {
    path:'non-admin/assets',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/super-admin/pages/assets/assets.module').then(result=>result.AssetsModule)
  }

  //profiles
  ,{
    path:'',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/profiles/profiles.module').then(result=> result.ProfilesModule)
  },
  {
    path: '',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/non-admin/transactions-in/transactions-in.module').then(result => result.TransactionsInModule)
  },
  {
    path: '',
    component: MainbarComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./../app/pages/non-admin/transactions-out/transactions-out.module').then(result => result.TransactionsOutModule)

  },
  // notfound
  {
    path: '**',
    component:NotFoundComponent,
    canActivate:[AuthGuard],
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
