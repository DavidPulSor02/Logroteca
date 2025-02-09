import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaFlipanteFiestaDeMarioPageRoutingModule } from './la-flipante-fiesta-de-mario-routing.module';

import { LaFlipanteFiestaDeMarioPage } from './la-flipante-fiesta-de-mario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaFlipanteFiestaDeMarioPageRoutingModule
  ],
  declarations: [LaFlipanteFiestaDeMarioPage]
})
export class LaFlipanteFiestaDeMarioPageModule {}
