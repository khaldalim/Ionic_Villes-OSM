import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityInfoPage } from './city-info.page';

const routes: Routes = [
  {
    path: '',
    component: CityInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityInfoPageRoutingModule {}
