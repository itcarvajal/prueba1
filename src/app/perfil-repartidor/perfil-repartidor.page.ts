import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepartidoresService } from '../repartidores.service';

@Component({
  selector: 'app-perfil-repartidor',
  templateUrl: './perfil-repartidor.page.html',
  styleUrls: ['./perfil-repartidor.page.scss'],
})
export class PerfilRepartidorPage implements OnInit {

  repartidores: any[] = [];


  constructor( 
    private router:Router,
    private repartidoresService: RepartidoresService
    ) { }

  ngOnInit() {
    this.repartidores = this.repartidoresService.obtenerRepartidores();

  }


  Atras5(){
    this.router.navigateByUrl('/home')
  }





}
