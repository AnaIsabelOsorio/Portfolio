import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

export const portfolioRoutes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default portfolioRoutes;
