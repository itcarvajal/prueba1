import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoPaquetesPageRoutingModule } from './ingreso-paquetes-routing.module';

import { IngresoPaquetesPage } from './ingreso-paquetes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoPaquetesPageRoutingModule
  ],
  declarations: [IngresoPaquetesPage]
})
export class IngresoPaquetesPageModule {}
