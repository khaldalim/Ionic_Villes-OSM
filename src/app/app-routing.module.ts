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
    path: 'list-produits',
    canActivate : [AuthentificationGuard],
    loadChildren: () => import('./pages/members/list-produits/list-produits.module').then( m => m.ListProduitsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
