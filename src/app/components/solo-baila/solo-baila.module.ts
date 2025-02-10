import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoloBailaPageRoutingModule } from './solo-baila-routing.module';

import { SoloBailaPage } from './solo-baila.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoloBailaPageRoutingModule
  ],
  declarations: [SoloBailaPage]
})
export class SoloBailaPageModule {}
