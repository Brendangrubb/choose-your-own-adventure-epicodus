import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { FirstLevelComponent } from './first-level/first-level.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'userName/:userName',
    component:FirstLevelComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
