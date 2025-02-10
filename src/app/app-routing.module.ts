import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'fortnite',
    loadChildren: () => import('./components/fortnite/fortnite.module').then( m => m.FortnitePageModule)
  },
  {
    path: 'among-us',
    loadChildren: () => import('./components/among-us/among-us.module').then( m => m.AmongUsPageModule)
  },
  {
    path: 'carlos-duty',
    loadChildren: () => import('./components/carlos-duty/carlos-duty.module').then( m => m.CarlosDutyPageModule)
  },
  {
    path: 'futbol-de-carros',
    loadChildren: () => import('./components/futbol-de-carros/futbol-de-carros.module').then( m => m.FutbolDeCarrosPageModule)
  },
  {
    path: 'solo-baila',
    loadChildren: () => import('./components/solo-baila/solo-baila.module').then( m => m.SoloBailaPageModule)
  },
  {
    path: 'la-flipante-fiesta-de-mario',
    loadChildren: () => import('./components/la-flipante-fiesta-de-mario/la-flipante-fiesta-de-mario.module').then( m => m.LaFlipanteFiestaDeMarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
