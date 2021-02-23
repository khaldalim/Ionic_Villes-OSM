import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityFormPage } from './city-form.page';

const routes: Routes = [
  {
    path: '',
    component: CityFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityFormPageRoutingModule {}
