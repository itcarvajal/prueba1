import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {

  private paquetes: any[] = [];

  agregarPaquetes(paquetes: any) {

    if (!paquetes.estado) {
      paquetes.estado = 'Por repartir';
    }

    
    this.paquetes.push(paquetes);
  }

  obtenerPaquetes() {
    return this.paquetes;
  }


  constructor() { }
}
