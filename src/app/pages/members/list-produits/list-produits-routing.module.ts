import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProduitsPage } from './list-produits.page';

const routes: Routes = [
  {
    path: '',
    component: ListProduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListProduitsPageRoutingModule {}
