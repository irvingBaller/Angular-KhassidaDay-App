import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './pages/login/login/login.component';
import {SignupComponent} from './pages/login/signup/signup.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  // {
  //   path: '**',
  //   redirectTo: 'login'
  // },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },

]
