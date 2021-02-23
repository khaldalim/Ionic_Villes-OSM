import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthentificationGuard} from './guard/authentification.guard';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/public/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    canActivate : [AuthentificationGuard],
    loadChildren: () => import('./pages/members/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'city-info/:codePostal',
    canActivate : [AuthentificationGuard],
    loadChildren: () => import('./pages/members/city-info/city-info.module').then( m => m.CityInfoPageModule)
  },
  {
    path: 'city-form',
    canActivate : [AuthentificationGuard],
    loadChildren: () => import('./pages/members/city-form/city-form.module').then( m => m.CityFormPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
