import { Route } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'welcome' },
  {
    //* welcome
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () =>
          import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
      },
    ],
  },
];
