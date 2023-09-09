import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoPaquetesPage } from './ingreso-paquetes.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoPaquetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoPaquetesPageRoutingModule {}
