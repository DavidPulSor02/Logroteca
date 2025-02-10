import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmongUsPageRoutingModule } from './among-us-routing.module';

import { AmongUsPage } from './among-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmongUsPageRoutingModule
  ],
  declarations: [AmongUsPage]
})
export class AmongUsPageModule {}
