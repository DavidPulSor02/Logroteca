import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmongUsPage } from './among-us.page';

const routes: Routes = [
  {
    path: '',
    component: AmongUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmongUsPageRoutingModule {}
