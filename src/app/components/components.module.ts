import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { CardsGameComponent } from './cards-game/cards-game.component';
import { FormsModule } from '@angular/forms';
import { AmongUsPageModule } from './among-us/among-us.module';
import { CarlosDutyPageModule } from './carlos-duty/carlos-duty.module';
import { FortnitePageModule } from './fortnite/fortnite.module';
import { FutbolDeCarrosPageModule } from './futbol-de-carros/futbol-de-carros.module';
import { LaFlipanteFiestaDeMarioPageModule } from './la-flipante-fiesta-de-mario/la-flipante-fiesta-de-mario.module';
import { SoloBailaPageModule } from './solo-baila/solo-baila.module';



@NgModule({
  declarations: [
    LayoutComponent,
    
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CardsGameComponent,
    AmongUsPageModule,
    CarlosDutyPageModule,
    FortnitePageModule,
    FutbolDeCarrosPageModule,
    LaFlipanteFiestaDeMarioPageModule,
    SoloBailaPageModule
    
  ],
  exports: [
    LayoutComponent,
    CardsGameComponent
    
    
  ]
})
export class ComponentsModule { }
