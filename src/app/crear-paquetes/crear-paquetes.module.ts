import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPaquetesPageRoutingModule } from './crear-paquetes-routing.module';

import { CrearPaquetesPage } from './crear-paquetes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPaquetesPageRoutingModule
  ],
  declarations: [CrearPaquetesPage]
})
export class CrearPaquetesPageModule {}
