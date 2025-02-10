import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarlosDutyPageRoutingModule } from './carlos-duty-routing.module';

import { CarlosDutyPage } from './carlos-duty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarlosDutyPageRoutingModule
  ],
  declarations: [CarlosDutyPage]
})
export class CarlosDutyPageModule {}
