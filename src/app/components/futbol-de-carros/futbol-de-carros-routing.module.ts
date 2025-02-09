import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutbolDeCarrosPage } from './futbol-de-carros.page';

const routes: Routes = [
  {
    path: '',
    component: FutbolDeCarrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutbolDeCarrosPageRoutingModule {}
