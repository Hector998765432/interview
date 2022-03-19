import { Route } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
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
      {
        path: 'ingredient',
        loadChildren: () =>
          import('./pages/ingredients/ingredients.module').then((m) => m.IngredientsModule),
      },
      {
        path: 'dish',
        loadChildren: () =>
          import('./pages/dishes/dishes.module').then((m) => m.DishesModule),
      },
    ],
  },
];
