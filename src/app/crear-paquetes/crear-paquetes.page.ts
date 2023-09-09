import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crear-paquetes',
  templateUrl: './crear-paquetes.page.html',
  styleUrls: ['./crear-paquetes.page.scss'],
})
export class CrearPaquetesPage implements OnInit {

  paquetes: any[] = [];

  constructor(
    private router: Router,

    ) { }

  ngOnInit() {
  }

  ingresarPaquete(){
    this.router.navigateByUrl('/ingreso-paquetes')
  }

  Atras3(){
    this.router.navigateByUrl('/home')
  }
  detallePaquete(){
    this.router.navigateByUrl('/detalle-paquete')
  }

}
