import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityHistoriquePageRoutingModule } from './city-historique-routing.module';

import { CityHistoriquePage } from './city-historique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityHistoriquePageRoutingModule
  ],
  declarations: [CityHistoriquePage]
})
export class CityHistoriquePageModule {}
