import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePaquetePageRoutingModule } from './detalle-paquete-routing.module';

import { DetallePaquetePage } from './detalle-paquete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePaquetePageRoutingModule
  ],
  declarations: [DetallePaquetePage]
})
export class DetallePaquetePageModule {}
