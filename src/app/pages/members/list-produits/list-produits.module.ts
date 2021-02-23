import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProduitsPageRoutingModule } from './list-produits-routing.module';

import { ListProduitsPage } from './list-produits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProduitsPageRoutingModule
  ],
  declarations: [ListProduitsPage]
})
export class ListProduitsPageModule {}
