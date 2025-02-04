import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class ComponentsModule { }
