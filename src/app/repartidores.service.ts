import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepartidoresService {

  private repartidores: any[] = [];

  agregarRepartidor(repartidor: any) {
    this.repartidores.push(repartidor);
  }

  obtenerRepartidores() {
    return this.repartidores;
  }

  constructor() { }
}
