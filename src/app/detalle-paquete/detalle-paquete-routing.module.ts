import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePaquetePage } from './detalle-paquete.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePaquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePaquetePageRoutingModule {}
