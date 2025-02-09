import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { CardsGameComponent } from './cards-game/cards-game.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CardsGameComponent
    
  ],
  exports: [
    LayoutComponent,
    CardsGameComponent
    
    
  ]
})
export class ComponentsModule { }
