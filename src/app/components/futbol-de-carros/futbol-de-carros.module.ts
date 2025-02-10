import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutbolDeCarrosPageRoutingModule } from './futbol-de-carros-routing.module';

import { FutbolDeCarrosPage } from './futbol-de-carros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutbolDeCarrosPageRoutingModule
  ],
  declarations: [FutbolDeCarrosPage]
})
export class FutbolDeCarrosPageModule {}
