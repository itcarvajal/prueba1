import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPaquetesPage } from './crear-paquetes.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPaquetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPaquetesPageRoutingModule {}
