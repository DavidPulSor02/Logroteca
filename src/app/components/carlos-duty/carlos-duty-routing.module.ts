import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarlosDutyPage } from './carlos-duty.page';

const routes: Routes = [
  {
    path: '',
    component: CarlosDutyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarlosDutyPageRoutingModule {}
