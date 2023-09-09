import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepartidoresService } from '../repartidores.service';

@Component({
  selector: 'app-crear-repartidor',
  templateUrl: './crear-repartidor.page.html',
  styleUrls: ['./crear-repartidor.page.scss'],
})
export class CrearRepartidorPage implements OnInit {
  nombre: string = '';       
  direccion: string = '';    
  rut: string = '';  
  numero: string='';        

  repartidor: any[] = [];

  constructor(
    private router:Router,
    private repartidoresService:RepartidoresService
    ) { }

    
  Atras(){
    this.router.navigateByUrl('/home');
  }
  

  ngOnInit() {

  }

  crearRepartidor() {
    const nuevoRepartidor = {
      nombre: this.nombre,
      direccion: this.direccion,
      rut: this.rut,
      numero: this.numero

    };
  
     this.repartidoresService.agregarRepartidor(nuevoRepartidor);

     console.log('Repartidores:', this.repartidoresService.obtenerRepartidores());
  

    this.nombre = ' ';
    this.direccion = ' ';
    this.rut=' ';
    this.numero=' ';

  

  }

  irACrearRepartidor() {
    this.router.navigateByUrl('/crear-repartidor');
  }


  actualizarLista(repartidor: any) {
    this.repartidor.push(repartidor);
  }


}

