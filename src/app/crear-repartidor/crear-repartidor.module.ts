import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearRepartidorPageRoutingModule } from './crear-repartidor-routing.module';

import { CrearRepartidorPage } from './crear-repartidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearRepartidorPageRoutingModule
  ],
  declarations: [CrearRepartidorPage]
})
export class CrearRepartidorPageModule {}
