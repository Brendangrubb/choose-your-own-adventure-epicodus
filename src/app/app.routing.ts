import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  // {
  //   path: 'playerAdd:id',
  //   component:
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
