import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilRepartidorPageRoutingModule } from './perfil-repartidor-routing.module';

import { PerfilRepartidorPage } from './perfil-repartidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilRepartidorPageRoutingModule
  ],
  declarations: [PerfilRepartidorPage]
})
export class PerfilRepartidorPageModule {}
