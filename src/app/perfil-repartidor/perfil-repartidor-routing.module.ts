import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilRepartidorPage } from './perfil-repartidor.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilRepartidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilRepartidorPageRoutingModule {}
